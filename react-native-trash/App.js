import React from "react"
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HomeScreenNavigationWrapper from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import ProfileScreen from "./screens/ProfileScreen";
import LeaderBoard from "./screens/LeaderBoard";
import SignInScreen from "./screens/SignInScreen";
import { FirebaseUserProvider } from './firebase/FirebaseUserContext';
import { useFirebase } from "./firebase/FirebaseUserContext";





const Tab = createMaterialBottomTabNavigator();

export default function App() {
  const { authUser, loading } = useFirebase();

	return (
    <FirebaseUserProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home" activeColor="white" barStyle={{ backgroundColor: "salmon" }}>
          <Tab.Screen
            name="Home"
            component={HomeScreenNavigationWrapper}
            options={{
              tabBarIcon: ({ color }) => <MaterialIcons name="home" size={24} color={color} />
            }}
          />
          <Tab.Screen
            name="Map"
            component={MapScreen}
            options={{
              tabBarIcon: ({ color }) => <MaterialIcons name="map" size={24} color={color} />
            }}
          />
			<Tab.Screen
				name="Leaderboard"
				component={LeaderBoard}
				options={{
					tabBarIcon: ({ color }) => <MaterialIcons name="euro-symbol" size={24} color={color} />
				}}
			/>
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </FirebaseUserProvider>
	);
}
