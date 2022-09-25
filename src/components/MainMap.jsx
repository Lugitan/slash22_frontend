import React, { useRef, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import maplibregl from "maplibre-gl";
import config from "../utils/config";
import { useTrash } from "../hooks/useTrash";

const Root = styled("div")({});
const MapContainer = styled("div")({
	height: "calc(100vh - 120px)",
});

function MainMap(props) {
	const { setCurrentTrash, handleBottomRight } = props;
	const mapContainer = useRef(null);
	const map = useRef(null);
	var marker = new maplibregl.Marker({ color: "#FF0000" });
	const [lng, setLng] = useState(13.404954);
	const [lat, setLat] = useState(52.520008);
	const [zoom, setZoom] = useState(9);
	const [API_KEY] = useState(config.accessToken);
	const { data, isSuccess } = useTrash();
	const [oldData, setOldData] = useState(undefined);
	const [oldPins, setOldPins] = useState([]);

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

		// Add geolocate control to the map.
		map.current.addControl(
			new maplibregl.GeolocateControl({
				positionOptions: {
					enableHighAccuracy: true,
				},
				trackUserLocation: true,
			}),
		);

		// console.log(map.current)
		// map.current.on("click", (e) => {
		// 	// console.log(e)
		// 	marker.setLngLat(e.lngLat).addTo(map.current);
		// })

		// new maplibregl.Marker().setLngLat([52.494666, 13.445760]).addTo(map.current);
		if (data) {
			data.forEach((d, i) => {
				var pin = new maplibregl.Marker().setLngLat([d.longitude, d.latitude]);
				pin.addTo(map.current);
			});
		}
	}, [data]);

	if (data != oldData) {
		var pins = [];
		setOldData(data);

		oldPins.forEach((pin) => {
			pin.remove();
		});

		data.forEach((d, i) => {
			var pin = new maplibregl.Marker().setLngLat([d.longitude, d.latitude]);
			pin.getElement().addEventListener("click", function (e) {
				setCurrentTrash(d);
				handleBottomRight(false);
			});
			pins.push(pin);
			pin.addTo(map.current);
		});

		setOldPins(pins);
	}

	return (
		<Root>
			<MapContainer ref={mapContainer} />
		</Root>
	);
}

export default MainMap;
