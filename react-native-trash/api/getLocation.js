import * as Location from "expo-location";

export default async function getLocation() {
        await Location.requestForegroundPermissionsAsync().catch((error) => console.error('error', error));
		await Location.getCurrentPositionAsync({}).then((location) => {
            console.log(location.coords.longitude)
            const returnobj = {long: location.coords.longitude, lat: location.coords.longitude }
			return returnobj;
		}).catch((error) => console.error('error', error));
	}
