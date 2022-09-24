import PropTypes from "prop-types";
import React, { createContext, useContext, useReducer } from "react";
import MapReducer from "../Reducer/MapReducer";

const MapStateContext = createContext();
const MapDispatchContext = createContext();

export const MapProvider = (props) => {
	const { children } = props;
	const [state, dispatch] = useReducer(MapReducer, { markers: [] });
	return (
		<MapStateContext.Provider value={state}>
			<MapDispatchContext.Provider value={dispatch}>{children}</MapDispatchContext.Provider>
		</MapStateContext.Provider>
	);
};

MapProvider.propTypes = {
	children: PropTypes.element,
};

MapProvider.defaultProps = {
	children: <></>,
};

export const useStateMap = () => {
	const context = useContext(MapStateContext);
	if (context === undefined) {
		throw new Error("place useStateMap within MapProvider");
	}
	return context;
};

export const useDispatchMap = () => {
	const context = useContext(MapDispatchContext);
	if (context === undefined) {
		throw new Error("place useDispatchMap within MapProvider");
	}
	return context;
};
