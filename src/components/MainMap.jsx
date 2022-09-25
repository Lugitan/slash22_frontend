import React, { useRef, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import maplibregl from "maplibre-gl";
import config from "../utils/config";

const Root = styled("div")({});
const MapContainer = styled("div")({
	height: "calc(100vh - 120px)",
});

function MainMap() {
	const mapContainer = useRef(null);
	const map = useRef(null);
	var marker = new maplibregl.Marker({"color": "#FF0000"})
	const [lng, setLng] = useState(13.404954);
	const [lat, setLat] = useState(52.520008);
	const [zoom, setZoom] = useState(9);
	const [API_KEY] = useState(config.accessToken)
	useEffect(() => {
		if (map.current) return; // initialize map only once
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
		// new maplibregl.Marker().setLngLat([52.494666, 13.445760]).addTo(map.current);
	});
	
	return (
		<Root>
			<MapContainer ref={mapContainer} />
		</Root>
	);
}

export default MainMap;
