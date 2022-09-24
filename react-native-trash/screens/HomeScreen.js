import { useState, useRef, useEffect } from "react";
import { StyleSheet, Pressable, View, Text, SafeAreaView, Button, TouchableOpacity, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Entypo } from "@expo/vector-icons";
import { Camera, CameraType, AutoFocus } from "expo-camera";
import { useIsFocused } from "@react-navigation/native";

export default function HomeScreen() {
	const [type, setType] = useState(CameraType.back);
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
			<View style={styles.container}></View>
			{inCameraView ? (
				<CameraView
					autoFocus={autoFocus}
					type={type}
					setImageObject={setImageObject}
					setInCameraView={setInCameraView}
				/>
			) : (
				<TrashButton onClick={onReportTrashClick} />
			)}
			{imageObject.uri && <Image source={{ uri: imageObject.uri }} style={styles.image} />}
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

	return (
		<Camera style={styles.camera} type={props.type} ref={camera}>
			<View style={styles.takePictureContainer}>
				<TouchableOpacity
					style={styles.takePictureButton}
					onPress={() => {
						camera.current.takePictureAsync().then((pic) => {
							props.setImageObject(pic);
							props.setInCameraView(false);
						});
					}}
				/>
			</View>
		</Camera>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 0.4,
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
	camera: {
		flex: 1,
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
	},
	image: {
		width: 320,
		height: 640,
	},
});
