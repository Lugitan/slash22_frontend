import { useQuery } from "react-query";
import { useServices } from "../services/Services";

export const useChar = (payload) => {
	const services = useServices();
	const response = useQuery("character", () => services.user.getUser(payload));

	return response;
};

export const usePickupTrash = (opts) => {
	const services = useServices();
	return useMutation((payload) => services.user.createUser(payload), {
		...opts,
		onSuccess: async (response, vars) => {
			if (opts?.onSuccess) {
				opts.onSuccess(response, vars);
			}

			return response;
		},
	});
};

export default useChar;
