const CarService = (api) => {
	const getCar = async (payload) => {
		const result = await api.post("/car", { body: payload });

		return result.data;
	};
	return {
		getCar,
	};
};

export default CarService;
