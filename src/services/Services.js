import React, { useContext } from "react";
import axios from "axios";
import TripService from "./TripService";
import CarService from "./CarService";
import CharacterService from "./CharacterService";

export const Services = (api) => {
	const trip = TripService(api);
	const car = CarService(api);
	const char = CharacterService(api);

	return {
		trip,
		char,
		car,
	};
};

export const ServicesContext = React.createContext(Services(axios.create()));

export const useServices = () => useContext(ServicesContext);
