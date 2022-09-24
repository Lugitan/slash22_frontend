import { SafeAreaView, StyleSheet, Text } from "react-native";
import { getUser } from "../api/user";

export default function ProfileScreen(){
    return(
        <SafeAreaView style={styles.container}>
            <Text style={{ textAlign: "center" }}>Hi {JSON.stringify(getUser('http://10.0.4.250:8080', "1234", ""))}</Text>
        </SafeAreaView>
    )
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
