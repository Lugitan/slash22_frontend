import React from "react";
import { Marker } from "react-map-gl";
import { useStateMap } from "../Provider/MapProvider";

function CustomMarker() {
	const { markers } = useStateMap();
	return (
		<>
			{markers?.map((marker) => (
				<Marker offsetTop={-48} offsetLeft={-24} latitude={marker[1]} longitude={marker[0]} key={`${marker}`}>
					<img src=" https://img.icons8.com/color/48/000000/marker.png" alt="marker" />
				</Marker>
			))}
		</>
	);
}

export default CustomMarker;
