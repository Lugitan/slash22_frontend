import React from "react"
import { StyleSheet, Pressable, View, Text, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.safeAreaContainer}>
			<View style={styles.container}>
				<Pressable
					style={({ pressed }) => [
						{
							opacity: pressed ? 0.3 : 1,
						},
						styles.button,
					]}
				>
					<View style={styles.row}>
						<Text style={styles.buttonText}>Report Trash!</Text>
						<Entypo name="trash" size={18} color="white" />
					</View>
				</Pressable>
				<StatusBar style="auto" />
			</View>
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
