import React, { useRef, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import mapboxgl from "mapbox-gl";
import config from "../utils/config";

mapboxgl.accessToken = config.accessToken;

const Root = styled("div")({});
const MapContainer = styled("div")({
	height: "80vh",
});

function MainMap() {
	const mapContainer = useRef(null);
	const map = useRef(null);
	const [lng, setLng] = useState(13.404954);
	const [lat, setLat] = useState(52.520008);
	const [zoom, setZoom] = useState(9);
	useEffect(() => {
		if (map.current) return; // initialize map only once
		map.current = new mapboxgl.Map({
			container: mapContainer.current,
			style: "mapbox://styles/mapbox/streets-v11",
			center: [lng, lat],
			zoom,
		});
		map.current.on("move", () => {
			setLng(map.current.getCenter().lng.toFixed(4));
			setLat(map.current.getCenter().lat.toFixed(4));
			setZoom(map.current.getZoom().toFixed(2));
		});
	});
	return (
		<Root>
			<MapContainer ref={mapContainer} />
		</Root>
	);
}

export default MainMap;
