import { useQuery } from "react-query";
import { useServices } from "../services/Services";

export const useChar = (payload) => {
	const services = useServices();
	const response = useQuery("character", () => services.char.getCharacter(payload));

	return response;
};

export default useChar;
