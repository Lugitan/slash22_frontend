const TrashService = (api) => {
	const getTrash = async (payload) => {
		const result = await api.get(`/trash`, { body: payload });

		return result.data;
	};

	const createNewTrash = async (payload) => {
		const result = await api.post(`/trash/new`, { body: payload });

		return result.data;
	};

	const pickupTrash = async (payload) => {
		const result = await api.delete("/trash", { data: payload });

		return result.data;
	};

	const reportTrash = async (payload) => {
		const result = await api.post("/trash", { body: payload });

		return result.data;
	};

	return {
		getTrash,
		createNewTrash,
		pickupTrash,
		reportTrash
	};
};

export default TrashService;
