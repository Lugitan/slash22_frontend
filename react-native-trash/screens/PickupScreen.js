import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { ScrollView, AspectRatio, Center, Stack, useTheme, Heading, NativeBaseProvider, Box, Divider, Image } from "native-base";
import TrashItem from "../components/TrashItem";

export default function PickupScreen() {
	const { colors } = useTheme();
	return (
		<SafeAreaView style={styles.areaView}>
			<NativeBaseProvider>
				<Center mt="45px" h="100px">
					<Stack direction="row" mb="2.5" mt="1.5" space={3}>
						<Center
							size="16"
							bg="primary.400"
							rounded="sm"
							_text={{
								color: "warmGray.50",
								fontWeight: "medium",
							}}
							shadow={"3"}
						>
							<AspectRatio w="100%" ratio={16 / 9}>
								<Image
									source={{
										uri: "https://wallpaperaccess.com/full/317501.jpg",
									}}
									alt="Alternate Text"
									size="xl"
								/>
							</AspectRatio>
						</Center>
						<Center
							bg="primary.500"
							size="16"
							rounded="sm"
							_text={{
								color: "warmGray.50",
								fontWeight: "medium",
							}}
							shadow={"3"}
						>
							Box 2
						</Center>
					</Stack>
				</Center>
				<Divider
					mb="2"
					my="2"
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
	);
}

const styles = StyleSheet.create({
	areaView: {
		flex: 1,
	},
});
