import { SafeAreaView, StyleSheet, Text } from "react-native";
import { getLeaderBoard } from "../api/user";

export default function LeaderBoard(){
    return(
        <SafeAreaView style={styles.container}>
			<ul>
				{getLeaderBoard('http://10.0.4.250:8080', "gilles", "")
				.map(function(user_json, index){
					return <li key={index}>{user_json._2} ({user_json._1})</li>;
				})}
			</ul>			
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
