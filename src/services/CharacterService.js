const CharacterService = (api) => {
	const getCharacter = async (payload) => {
		const result = await api.get(`/character/${payload}`);

		return result.data;
	};

	return {
		getCharacter,
	};
};

export default CharacterService;
