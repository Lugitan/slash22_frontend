import { useMutation, useQuery } from "react-query";
import { useServices } from "../services/Services";

export const useTrash = (payload) => {
	const services = useServices();
	const response = useQuery("trash", () => services.trash.getTrash(payload), {
		refetchInterval: 3000,
	});

	return response;
};

export const useReportTrash = (opts) => {
	const services = useServices();
	return useMutation((payload) => services.trash.reportTrash(payload), {
		...opts,
		onSuccess: async (response, vars) => {
			if (opts?.onSuccess) {
				opts.onSuccess(response, vars);
			}

			return response;
		},
	});
};

export const useCreateNewTrash = (opts) => {
	const services = useServices();
	return useMutation((payload) => services.trash.createNewTrash(payload), {
		...opts,
		onSuccess: async (response, vars) => {
			if (opts?.onSuccess) {
				opts.onSuccess(response, vars);
			}

			return response;
		},
	});
};

export const usePickupTrash = (opts) => {
	const services = useServices();
	return useMutation((payload) => services.trash.pickupTrash(payload), {
		...opts,
		onSuccess: async (response, vars) => {
			if (opts?.onSuccess) {
				opts.onSuccess(response, vars);
			}

			return response;
		},
	});
};
