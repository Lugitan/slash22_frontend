import { useState, useRef, useEffect } from "react";
import { StyleSheet, Pressable, View, Text, SafeAreaView, Button, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
import { Camera, AutoFocus } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import PickupScreen from "./PickupScreen";

const Stack = createNativeStackNavigator();

export default function HomeScreenNavigationWrapper() {
	return (
		<Stack.Navigator
            initialRouteName="HomeScreen"
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name="HomeScreen" component={HomeScreen} />
			<Stack.Screen name="Pickup" component={PickupScreen} />
		</Stack.Navigator>
	);
}

function HomeScreen() {
	const [permission, requestPermission] = Camera.useCameraPermissions();
	const [inCameraView, setInCameraView] = useState(false);
	const [imageObject, setImageObject] = useState({});
	const autoFocus = AutoFocus.off;

	const onReportTrashClick = () => setInCameraView(true);
	const isFocused = useIsFocused();

	useEffect(() => {
		setInCameraView(false);
		setImageObject({});
	}, [isFocused]);

	if (!permission) {
		// Camera permissions are still loading
		return <View />;
	}

	if (!permission.granted) {
		// Camera permissions are not granted yet
		return (
			<View style={styles.container}>
				<Text style={{ textAlign: "center" }}>We need your permission to show the camera</Text>
				<Button onPress={requestPermission} title="grant permission" />
			</View>
		);
	}

	return (
		<SafeAreaView style={styles.safeAreaContainer}>
			<View style={styles.container}>
				{inCameraView ? (
					<CameraView
						autoFocus={autoFocus}
						setImageObject={setImageObject}
						setInCameraView={setInCameraView}
					/>
				) : (
					<TrashButton onClick={onReportTrashClick} />
				)}
			</View>
			<StatusBar style="auto" />
		</SafeAreaView>
	);
}

function TrashButton(props) {
	return (
		<Pressable
			style={({ pressed }) => [
				{
					opacity: pressed ? 0.3 : 1,
				},
				styles.button,
			]}
			onPress={props.onClick}
		>
			<View style={styles.row}>
				<Text style={styles.buttonText}>Report Trash!</Text>
				<Entypo name="trash" size={18} color="white" />
			</View>
		</Pressable>
	);
}

function CameraView(props) {
	const camera = useRef(null);
	const navigation = useNavigation();

	return (
		<Camera style={styles.camera} r ref={camera}>
			<View style={styles.takePictureContainer}>
				<TouchableOpacity
					style={styles.takePictureButton}
					onPress={() => {
						camera.current
							.takePictureAsync()
							.then((pic) => {
								props.setImageObject(pic);
                                return pic.uri;
							})
							.then((uri) => navigation.navigate("Pickup", { uri: uri }));
					}}
				/>
			</View>
		</Camera>
	);
}

const styles = StyleSheet.create({
	safeAreaContainer: {
		flex: 1,
	},
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
	buttonContainer: {
		flex: 1,
	},
	row: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		gap: 8,
	},
	camera: {
		flex: 0.7,
		width: "100%",
	},
	takePictureButton: {
		width: 60,
		height: 60,
		backgroundColor: "transparent",
		borderColor: "white",
		borderWidth: 2,
		borderRadius: 10000,
	},
	takePictureContainer: {
		flex: 1,
		alignItems: "center",
		justifyContent: "flex-end",
		paddingBottom: 20,
	}
});
