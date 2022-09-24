function convertToClientTime(serverTime) {
	return serverTime + new Date().getTimezoneOffset() * 60 * 1000;
}

export default convertToClientTime;
