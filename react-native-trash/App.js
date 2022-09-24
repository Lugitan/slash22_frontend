import React from "react"
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import ProfileScreen from "./screens/ProfileScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import PickupScreen from "./screens/PickupScreen";
import { NativeBaseProvider } from "native-base";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
	return (
		<NativeBaseProvider>
			<NavigationContainer>
				<Tab.Navigator initialRouteName="Home" activeColor="white" barStyle={{ backgroundColor: "salmon" }}>
					<Tab.Screen
						name="Home"
						component={PickupScreen}
						options={{
							tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />,
						}}
					/>
					<Tab.Screen
						name="Map"
						component={MapScreen}
						options={{
							tabBarIcon: ({ color }) => <MaterialIcons name="map" size={24} color={color} />,
						}}
					/>
					<Tab.Screen
						name="Profile"
						component={ProfileScreen}
						options={{
							tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />,
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</NativeBaseProvider>
	);
}
