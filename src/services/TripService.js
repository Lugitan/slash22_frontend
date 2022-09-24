const TripService = (api) => {
	const getTrip = async (payload) => {
		const result = await api.get(`/trip/${payload}`);

		return result.data;
	};

	const addTrip = async (payload) => {
		const result = await api.post(`/trip`, payload);

		return result.data;
	};

	const getInCar = async (payload) => {
		const result = await api.post("/trip/get-in", payload);

		return result.data;
	};

	const getOutCar = async (payload) => {
		const result = await api.post("/trip/get-out", payload);

		return result.data;
	};

	return {
		addTrip,
		getTrip,
		getInCar,
		getOutCar,
	};
};

export default TripService;
