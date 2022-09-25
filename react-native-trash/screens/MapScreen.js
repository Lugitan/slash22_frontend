import { SafeAreaView, View } from "react-native";
import maplibregl from "maplibre-gl";
import React from "react";


export default function MapScreen(){
    const mapContainer = React.useRef(null);
    const map = React.useRef(null);
	var marker = new maplibregl.Marker({"color": "#FF0000"})
	const [lng, setLng] = React.useState(13.404954);
	const [lat, setLat] = React.useState(52.520008);
	const [zoom, setZoom] = React.useState(9);
	const [API_KEY] = React.useState("M6UOFHEPLszG4jlTd4G4")
    React.useEffect(() => {
        if (map.current) return;

        map.current = new maplibregl.Map({
            container: mapContainer.current,
			style: `https://api.maptiler.com/maps/streets/style.json?key=${API_KEY}`, // optimize=true
			center: [lng, lat],
			zoom,
		});
		map.current.on("move", () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
		});
		map.current.on("click", (e) => {
			console.log(e)
			marker.setLngLat(e.lngLat).addTo(map.current);
		})
    })

    return(
        <SafeAreaView style={styles.safeAreaContainer}>
            <View style={styles.mapContainer} ref={mapContainer} />
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
    }
});