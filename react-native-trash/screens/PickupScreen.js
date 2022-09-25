import React, { useEffect, useState } from "react";
import { Image, ImageBackground, StyleSheet } from "react-native";
import {
	ScrollView,
	AspectRatio,
	Center,
	Stack,
	Heading,
	NativeBaseProvider,
	Box,
	Divider,
	CheckCircleIcon,
	CloseIcon,
	Text,
} from "native-base";
import TrashItem from "../components/TrashItem";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useFirebase } from "../firebase/FirebaseUserContext";
import { getTrash, reportTrash } from "../api/trash";
import * as Location from "expo-location";


export default function PickupScreen({ route, navigation }) {
	const [imageURI, setImageURI] = useState(" ");
	const [location, setLocation] = useState("Erich-Weinert-Straße 145, 10409 Berlin");
	const [bucketID, setBucketID] = useState("sangwoo.jpg");
	const [projects, setProjects] = useState({});
	const { storage } = useFirebase();
	const image = {
		uri: "https://firebasestorage.googleapis.com/v0/b/hackathon-trash.appspot.com/o/BG.png?alt=media&token=955bdbfb-fa7d-4723-9c7d-5b9d3e67495b",
	};

	useEffect(() => {
		const { uri } = route.params;
		setImageURI(uri);
		setBucketID(makeid(5) + ".jpg");
		getTrash("filip").then((data) => setProjects(data));
	}, []);

	async function uploadBlob(url, storageref) {
		await fetch(url)
			.then((r) => {
				return r.blob();
			})
			.then((blob) =>
				uploadBytes(storageref, blob).then(() => {
					console.log("Uploaded a blob or file!");
				}),
			);
	}
	const names = ['gill', 'daniel', 'mantas', 'karsten']

	return (
		<NativeBaseProvider>
			<ImageBackground source={image} resizeMode="cover" style={styles.bgimage}>
				<Box safeArea>
					<Stack direction="row" mb="2.5" mt="1.5" space={10}>
						<Center size="40" rounded="sm">
							<AspectRatio w="100" ratio={14 / 20}>
								{imageURI && (
									<Image
										source={{
											uri: imageURI,
										}}
										alt="Alternate Text"
										size="xl"
										borderRadius={100}
									/>
								)}
							</AspectRatio>
						</Center>
						<Stack flex={1} flexWrap="wrap" direction="column" mb="2.5" mt="1.5" space={10}>
							<Center pr={10}>
								<Text fontWeight="semibold" color="white">Reported in: </Text>
								<Text color="white">{location}{" "}</Text>
							</Center>
							<Stack direction="row" mb="2.5" mt="1.5" space={10}>
								<CheckCircleIcon
									size="12"
									color="emerald.500"
									onPress={() => {
										const picref = ref(storage, bucketID);
										uploadBlob(imageURI, picref)
											.then(async () => {
												await Location.getCurrentPositionAsync({})
													.then((location) => {
														return {
															long: location.coords.longitude,
															lat: location.coords.latitude,
														};
													})
													.then(({ long, lat }) => {
														getDownloadURL(picref).then((bucketurl) => {
															const randomElement = names[Math.floor(Math.random() * names.length)];
															reportTrash(
																{ longitude: long, latitude: lat },
																bucketurl,
																randomElement,
															)}
						
															);
													});
											})
											.then(() => navigation.navigate("HomeScreen"));
									}}
								/>
								<CloseIcon
									size="12"
									color="danger.600"
									onPress={() => navigation.navigate("HomeScreen")}
								/>
							</Stack>
						</Stack>
					</Stack>
				</Box>
				<Divider
					mb="2.5"
					mt="1.5"
					_light={{
						bg: "white",
					}}
					_dark={{
						bg: "white",
					}}
				/>
				<Box px="3">
					<Heading size="md" ml="-1" color="white">
						Already submitted trash
					</Heading>
				</Box>
				<Center flex={1} px="3">
					<ScrollView w="100%" h="100%" horizontal={true} contentContainerStyle={{ flexGrow: 1, margin: 4 }}>
						{projects.length > 0 &&
							projects.map((project) => (
								// eslint-disable-next-line react/jsx-key
								<TrashItem
									uri={project.image_url}
									reward={project.reward}
									name={project.reported_by}
									time={Math.floor(Math.random() * 50)}
								/>
							))}
					</ScrollView>
				</Center>
			</ImageBackground>
		</NativeBaseProvider>
	);
}

function makeid(length) {
	var result = "";
	var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	var charactersLength = characters.length;
	for (var i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}

const styles = StyleSheet.create({
	bgimage: {
		flex: 1,
		justifyContent: "center",
		width: "100%",
	},
});
