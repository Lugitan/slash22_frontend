import React, { useEffect, useState } from "react";
import { Image } from "react-native";
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
import { ref, uploadBytes } from "firebase/storage";
import { useFirebase } from "../firebase/FirebaseUserContext";
import { reportTrash } from "../api/trash";

export default function PickupScreen({ route, navigation }) {
	const [imageURI, setImageURI] = useState(" ");
	const [location, setLocation] = useState("Erich-Weinert-Straße 145, 10409 Berlin");
	const { storage } = useFirebase();

	useEffect(() => {
		const { uri } = route.params;
		setImageURI(uri);
	}, []);

	async function uploadBlob(url, storageref) {
		await fetch(url)
			.then((r) => {
				return r.blob();
			})
			.then((blob) =>
				uploadBytes(storageref, blob).then(() => {
					console.log("Uploaded a blob or file!");
					navigation.navigate("HomeScreen");
				}),
			);
	}

	return (
<<<<<<< HEAD
		<SafeAreaView style={styles.areaView}>
			<NativeBaseProvider>
				<Center mt="45px" h="100px" px="3">
					<Stack direction="row" mb="2.5" mt="1.5" space={3}>
						<Center flex={1}>
							<AspectRatio w="100%" ratio={16 / 9}>
								{imageURI && <Image
=======
		<NativeBaseProvider>
			<Box safeArea>
				<Stack direction="row" mb="2.5" mt="1.5" space={10}>
					<Center size="40" rounded="sm">
						<AspectRatio w="100" ratio={14 / 20}>
							{imageURI && (
								<Image
>>>>>>> origin/react-native-integration
									source={{
										uri: imageURI,
									}}
									alt="Alternate Text"
									size="xl"
									borderRadius={100}
								/>
<<<<<<< HEAD
							}
							</AspectRatio>
						</Center>
					</Stack>
				</Center>
				<Divider
					mb="2"
					// my="2"
					_light={{
						bg: "muted.800",
					}}
					_dark={{
						bg: "muted.50",
					}}
				/>
				<Box px="3">
					<Heading size="md" ml="-1">
						Already submitted trash:
					</Heading>
				</Box>
				<Center flex={1} px="3">
					<ScrollView w="100%" h="100%" horizontal={true} contentContainerStyle={{ flexGrow: 1 }}>
						<TrashItem />
					</ScrollView>
				</Center>
			</NativeBaseProvider>
		</SafeAreaView>
=======
							)}
						</AspectRatio>
					</Center>
					<Stack flex={1} flexWrap="wrap" direction="column" mb="2.5" mt="1.5" space={10}>
						<Center pr={10}>
							<Text fontWeight="semibold">Reported in: </Text>
							{location}{" "}
						</Center>
						<Stack direction="row" mb="2.5" mt="1.5" space={10}>
							<CheckCircleIcon
								size="12"
								color="emerald.500"
								onPress={() => {
									const picref = ref(storage, "test.jpg");
									uploadBlob(imageURI, picref);
								}}
							/>
							<CloseIcon size="12" color="danger.600" onPress={() => navigation.navigate("HomeScreen")} />
						</Stack>
					</Stack>
				</Stack>
			</Box>
			<Divider
				mb="2.5"
				mt="1.5"
				_light={{
					bg: "muted.800",
				}}
				_dark={{
					bg: "muted.50",
				}}
			/>
			<Box px="3">
				<Heading size="md" ml="-1">
					Already submitted trash
				</Heading>
			</Box>
			<Center flex={1} px="3">
				<ScrollView w="100%" h="100%" horizontal={true} contentContainerStyle={{ flexGrow: 1, margin: 4 }}>
					<TrashItem />
					<TrashItem />
				</ScrollView>
			</Center>
		</NativeBaseProvider>
>>>>>>> origin/react-native-integration
	);
}
