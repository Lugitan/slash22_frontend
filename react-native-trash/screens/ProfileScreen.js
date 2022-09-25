import { SafeAreaView, StyleSheet, Text, ImageBackground } from "react-native";
import { getUser } from "../api/user";

const image = {
	uri: "https://firebasestorage.googleapis.com/v0/b/hackathon-trash.appspot.com/o/BG.png?alt=media&token=955bdbfb-fa7d-4723-9c7d-5b9d3e67495b",
};

export default function ProfileScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground source={image} resizeMode="cover" style={styles.bgimage}>
				<Text style={{ textAlign: "center" ,color: "white" }}>
					Hi {JSON.stringify(getUser("http://10.0.4.250:8080", "1234", ""))}
				</Text>
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
		color: "white"
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
