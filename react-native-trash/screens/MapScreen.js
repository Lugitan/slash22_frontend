import { SafeAreaView, StyleSheet, View, Dimensions } from "react-native";
import MapView, {Marker} from 'react-native-maps';
import React from "react";

export default function MapScreen(){
    return(
        <SafeAreaView style={styles.safeAreaContainer}>
            <MapView
                style={{width: Dimensions.get('window').width, height: Dimensions.get('window').height}}
                initialRegion={{
                    latitude: 52.520008,
                    longitude: 13.404954,
                    latitudeDelta: 0,
                    longitudeDelta: 0,
                }}
            >
                <Marker
                    key="0"
                    coordinate={{ latitude: 52.520008, longitude: 13.404954}}
                    title="Trash"
                    description="Description"
                />
            </MapView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
	safeAreaContainer: {
		flex: 1,
        paddingTop: 20
    },
    mapContainer: {
        height: "calc(100vh -120px)"
    },
    map: {
        flex: 1
    }
});