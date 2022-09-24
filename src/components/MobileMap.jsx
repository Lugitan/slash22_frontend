/* eslint-disable no-console */
import PropTypes from "prop-types";
import React, { useState, useCallback, useRef } from "react";
import { styled } from "@mui/material/styles";
import MapGL from "react-map-gl";
import Geocoder from "react-map-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
import config from "../utils/config";
import CustomMarker from "./CustomMarker";
import { useDispatchMap } from "../Provider/MapProvider";
// // eslint-disable-next-line import/no-webpack-loader-syntax
// mapboxgl.workerClass = require("worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker").default; // eslint-disable-line import/no-unresolved

const Root = styled("div")({});

// const SideBar = styled("div")({
// 	backgroundColor: "rgba(35, 55, 75, 0.9)",
// 	color: "#fff",
// 	padding: "6px 12px",
// 	fontFamily: "monospace",
// 	zIndex: 1,
// 	position: "absolute",
// 	top: "60px",
// 	left: 0,
// 	margin: "12px",
// 	borderRadius: "4px",
// });

const MAPBOX_TOKEN = config.accessToken;
function MobileMap(props) {
	const { width, height, searchResult, setSearchResult, setLocation } = props;
	const [viewport, setViewport] = useState({
		latitude: 48.1413,
		longitude: 11.5678,
		zoom: 12,
		bearing: 0,
		pitch: 0,
	});

	const mapDispatch = useDispatchMap();

	const mapRef = useRef();
	// const geocoderContainerRef = useRef();
	const handleViewportChange = useCallback(
		(newViewport) => {
			setViewport(newViewport);
			mapDispatch({ type: "ADD_MARKER", payload: { marker: [newViewport.longitude, newViewport.latitude] } });
			setLocation({ longitude: newViewport.longitude, latitude: newViewport.latitude });
		},
		[mapDispatch, setLocation],
	);
	const handleGeocoderViewportChange = useCallback(
		(newViewport) => {
			const geocoderDefaultOverrides = { transitionDuration: 1000 };

			mapDispatch({ type: "REMOVE_ALL" });
			return handleViewportChange({
				...newViewport,
				...geocoderDefaultOverrides,
			});
		},
		[handleViewportChange, mapDispatch],
	);

	return (
		<Root>
			{/* <SideBar className="sidebar">
				Longitude: {viewport.longitude.toFixed(2)} | Latitude: {viewport.latitude.toFixed(2)} | Zoom:{" "}
				{viewport.zoom.toFixed(2)}
			</SideBar> */}
			{/* <div ref={geocoderContainerRef} style={{ position: "absolute", top: 20, left: 20, zIndex: 1 }}> */}
			<MapGL
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...viewport}
				ref={mapRef}
				width={width}
				height={height} // "calc(100vh - 118px)"
				mapStyle="mapbox://styles/mapbox/streets-v11"
				onViewportChange={setViewport}
				mapboxApiAccessToken={MAPBOX_TOKEN}
				// onClick={(x) => {
				// 	// eslint-disable-next-line no-unused-expressions
				// 	x.srcEvent.which === 1 && // check if left click
				// 		(mapDispatch({ type: "REMOVE_ALL" }),
				// 		mapDispatch({ type: "ADD_MARKER", payload: { marker: x.lngLat } }));
				// }}
			>
				<Geocoder
					mapRef={mapRef}
					// geocoderContainerRef={geocoderContainerRef}
					inputValue={searchResult}
					onViewportChange={handleGeocoderViewportChange}
					mapboxApiAccessToken={MAPBOX_TOKEN}
					position="top-left"
					marker={false}
					// onClear={() => setSearchResult("")}
				/>
				<CustomMarker />
			</MapGL>
			{/* </div> */}
		</Root>
	);
}

MobileMap.propTypes = {
	height: PropTypes.string,
	searchResult: PropTypes.string,
	location: PropTypes.shape({
		latitude: PropTypes.number,
		longitude: PropTypes.number,
	}).isRequired,
	setSearchResult: PropTypes.func.isRequired,
	setLocation: PropTypes.func.isRequired,
	width: PropTypes.string,
};

MobileMap.defaultProps = {
	searchResult: "Munich",
	width: "100%",
	height: "400px",
};
export default MobileMap;
