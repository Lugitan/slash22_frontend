const UserService = (api) => {
	const getUser = async (payload) => {
		const result = await api.get(`/user`, { body: payload });

		return result.data;
	};

	const createUser = async (payload) => {
		const result = await api.post(`/user`, { body: payload });

		return result.data;
	};

	return {
		getUser,
		createUser
	};
};

export default UserService;
