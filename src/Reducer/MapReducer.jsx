const MapReducer = (state, action) => {
	switch (action.type) {
		case "ADD_MARKER":
			return {
				...state,
				markers: [...state.markers, action.payload.marker],
			};
		case "REMOVE_MARKER":
			return {
				...state,
				markers: [
					...state.markers.filter(
						(x) => x[0] !== action.payload.marker[0] && x[1] !== action.payload.marker[1],
					),
				],
			};
		case "REMOVE_ALL":
			return {
				markers: [],
			};
		default:
			return {
				state,
			};
	}
};

export default MapReducer;
