import React, { useContext } from "react";
import axios from "axios";
import TrashService from "./TrashService";
import UserService from "./UserService";

export const Services = (api) => {
	const trash = TrashService(api);
	const user = UserService(api);

	return {
		user,
		trash
	};
};

export const ServicesContext = React.createContext(Services(axios.create()));

export const useServices = () => useContext(ServicesContext);
