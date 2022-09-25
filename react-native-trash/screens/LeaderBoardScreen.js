import { SafeAreaView, StyleSheet, View, ImageBackground } from "react-native";
import { Center, NativeBaseProvider, Box, Text } from "native-base";
import React, { useEffect, useState } from "react";
import User from "../components/User";
import { getLeaderBoard } from "../api/user";

const image = {
	uri: "https://firebasestorage.googleapis.com/v0/b/hackathon-trash.appspot.com/o/BG.png?alt=media&token=955bdbfb-fa7d-4723-9c7d-5b9d3e67495b",
};

export default function LeaderBoardScreen() {
	const [iwas, setIwas] = React.useState([]);

	useEffect(() => {
		async function doSmth() {
			setIwas(
				await getLeaderBoard("gilles").then((data) => {
					return data;
				}),
			);
		}
		doSmth();
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground source={image} resizeMode="cover" style={styles.bgimage}>
				<NativeBaseProvider>
					<Box safeArea>
						<Center flex={1} px="3">
							<View>
								{iwas && iwas.map((u, i) => (
									<Text color="white" key={i}>
										{i}. {u.user_name} ({u.Score})
									</Text>
								))}
							</View>
						</Center>
					</Box>
				</NativeBaseProvider>
			</ImageBackground>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	button: {
		backgroundColor: "rgb(36,44,64)",
		padding: 10,
		borderRadius: 10,
	},
	buttonText: {
		fontSize: 18,
		paddingRight: 8,
		color: "white",
	},
	row: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 8,
	},
	safeAreaContainer: {
		flex: 1,
	},
	bgimage: {
		flex: 1,
		justifyContent: "center",
		width: "100%",
	},
});
