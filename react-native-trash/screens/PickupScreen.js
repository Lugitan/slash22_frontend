import React from "react";
import {
	SafeAreaView,
	ScrollView,
	VStack,
	Center,
	Text,
	useTheme,
	Heading,
	NativeBaseProvider,
	Box,
} from "native-base";
import TrashItem from "../components/TrashItem";

export default function PickupScreen() {
	const { colors } = useTheme();
	return (
		<NativeBaseProvider>
			<Center flex={1} px="3">
				<Box>
					<Heading size="md" ml="-1">
						The Garden City
					</Heading>
				</Box>
				<ScrollView w="100%" h="100%" horizontal={true}>
					<TrashItem />
				</ScrollView>
			</Center>
		</NativeBaseProvider>
	);
}
