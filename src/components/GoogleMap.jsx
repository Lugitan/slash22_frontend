import React, { useRef, useEffect } from "react";
import { Wrapper } from "@googlemaps/react-wrapper";
import config from "../utils/config";
import { styled } from "@mui/material/styles";

const MapContainer = styled("div")({
	height: "calc(100vh - 120px)",
});

function MyMapComponent({ center, zoom }) {
	const ref = useRef();

	useEffect(() => {
		new window.google.maps.Map(ref.current, {
			center,
			zoom,
		});
	});

	console.log(ref)

	return <div width="100px" height="100px" ref={ref} id="map" />;
}

export default function GoogleMap() {
	const center = { lat: -34.397, lng: 150.644 };
	const zoom = 4;

	return (
		<MapContainer>
			<Wrapper apiKey={config.googleKey}>
				<MyMapComponent center={center} zoom={zoom} />
			</Wrapper>
		</MapContainer>
	);
}
// function Map(props) {
// 	const { center, zoom } = props;
// 	const ref = React.useRef(null);
// 	const [map, setMap] = React.useState();

// 	React.useEffect(() => {
// 		if (ref.current && !map) {
// 			setMap(new window.google.maps.Map(ref.current, {}));
// 		}
// 	}, [ref, map]);

// 	console.log("test")

// 	return <div ref={ref} id="map" />;
// }

// const Marker = (options) => {
// 	const [marker, setMarker] = React.useState();

// 	React.useEffect(() => {
// 		if (!marker) {
// 			setMarker(new google.maps.Marker());
// 		}

// 		// remove marker from map on unmount
// 		return () => {
// 			if (marker) {
// 				marker.setMap(null);
// 			}
// 		};
// 	}, [marker]);
// 	React.useEffect(() => {
// 		if (marker) {
// 			marker.setOptions(options);
// 		}
// 	}, [marker, options]);
// 	return null;
// };

// export default function GoogleMap() {
// 	// const center = { lat: -34.397, lng: 150.644 };
// 	// const zoom = 4;
// 	const [clicks, setClicks] = React.useState([]);
// 	const [zoom, setZoom] = React.useState(3); // initial zoom
// 	const [center, setCenter] = React.useState({
// 		lat: 0,
// 		lng: 0,
// 	});

// 	const onClick = (e) => {
// 		// avoid directly mutating state
// 		setClicks([...clicks, e.latLng]);
// 	};

// 	const onIdle = (m) => {
// 		console.log("onIdle");
// 		setZoom(m.getZoom());
// 		setCenter(m.getCenter().toJSON());
// 	};
// 	const render = (status) => {
// 		// if (status === Status.LOADING) return <h3>{status} ..</h3>;
// 		// if (status === Status.FAILURE) return <h3>{status} ...</h3>;
// 		return null;
// 	};
// 	return (
// 		<MapContainer>
// 			<div style={{ display: "flex", height: "100%" }}>
// 				<Wrapper apiKey={config.googleKey} render={render}>
// 					<Map
// 						center={center}
// 						onClick={onClick}
// 						onIdle={onIdle}
// 						zoom={zoom}
// 						style={{ flexGrow: "1", height: "100%" }}
// 					>
// 						{/* {clicks.map((latLng, i) => (
// 							<Marker key={i} position={latLng} />
// 						))} */}
// 					</Map>
// 				</Wrapper>
// 				{/* Basic form for controlling center and zoom of map. */}
// 				{/* {form} */}
// 			</div>
// 		</MapContainer>
// 	);
// }
