import { SafeAreaView, StyleSheet, View } from "react-native";
import { Center, NativeBaseProvider, Box, Text } from "native-base";
import React, { useEffect, useState } from "react";
import User from "../components/User";
import { getLeaderBoard } from "../api/user";


export default function LeaderBoardScreen() {
	const [iwas, setIwas] = React.useState([]);

	useEffect(() => {
		async function doSmth() {
			setIwas(
				await getLeaderBoard("http://10.0.4.250:8080", "gilles").then((data) => {
					return data;
				}),
			);
		}
		doSmth()
	}, []);

	return (
		<SafeAreaView style={styles.container}>
			<NativeBaseProvider>
				<Box safeArea>
					<Center flex={1} px="3">
						<View>
							{
								iwas.map((u, i) => (<Text key={i}>{i}. {u.user_name} ({u.Score})</Text>))
							}
						</View>
					</Center>
				</Box>
			</NativeBaseProvider>
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
		backgroundColor: "salmon",
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
});
