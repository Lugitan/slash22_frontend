import { useMutation, useQuery } from "react-query";
import { useServices } from "../services/Services";

export const useTrip = (payload) => {
	const services = useServices();
	const response = useQuery("trip", () => services.trip.getTrip(payload), {
		refetchInterval: 1000,
	});

	return response;
};

export const useAddTrip = (opts) => {
	const services = useServices();
	return useMutation((payload) => services.trip.addTrip(payload), {
		...opts,
		onSuccess: async (response, vars) => {
			if (opts?.onSuccess) {
				opts.onSuccess(response, vars);
			}

			return response;
		},
	});
};

export const useGetInCar = (opts) => {
	const services = useServices();
	return useMutation((payload) => services.trip.getInCar(payload), {
		...opts,
		onSuccess: async (response, vars) => {
			if (opts?.onSuccess) {
				opts.onSuccess(response, vars);
			}

			return response;
		},
	});
};

export const useGetOutCar = (opts) => {
	const services = useServices();
	return useMutation((payload) => services.trip.getOutCar(payload), {
		...opts,
		onSuccess: async (response, vars) => {
			if (opts?.onSuccess) {
				opts.onSuccess(response, vars);
			}

			return response;
		},
	});
};
