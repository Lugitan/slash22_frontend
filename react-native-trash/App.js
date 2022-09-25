import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HomeScreenNavigationWrapper from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LeaderBoardScreen from "./screens/LeaderBoardScreen";
import SignInScreen from "./screens/SignInScreen";
import { FirebaseUserProvider } from "./firebase/FirebaseUserContext";
import { useFirebase } from "./firebase/FirebaseUserContext";
import { FontAwesome5 } from "@expo/vector-icons";
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']);

const Tab = createMaterialBottomTabNavigator();

export default function App() {
	const { authUser, loading } = useFirebase();

	return (
		<FirebaseUserProvider>
			<NavigationContainer>
				<Tab.Navigator initialRouteName="Map" activeColor="red" barStyle={{ backgroundColor: "rgb(36,44,64)" }}>
					<Tab.Screen
						name="Map"
						component={MapScreen}
						options={{
							tabBarIcon: ({ color }) => <MaterialIcons name="map" size={24} color={color} />,
						}}
					/>
					<Tab.Screen
						name="Cleanups"
						component={HomeScreenNavigationWrapper}
						options={{
							tabBarIcon: ({ color }) => <FontAwesome5 name="tasks" size={24} color={color} />,
						}}
					/>
					<Tab.Screen
						name="Update"
						component={LeaderBoardScreen}
						options={{
							tabBarIcon: ({ color }) => <FontAwesome5 name="newspaper" size={24} color={color} />,
						}}
					/>

					<Tab.Screen
						name="Leaderboard"
						component={LeaderBoardScreen}
						options={{
							tabBarIcon: ({ color }) => <Ionicons name="trophy-sharp" size={24} color={color} />,
						}}
					/>
					<Tab.Screen
						name="Settings"
						component={ProfileScreen}
						options={{
							tabBarIcon: ({ color }) => <Ionicons name="ios-settings" size={24} color={color} />,
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</FirebaseUserProvider>
	);
}
