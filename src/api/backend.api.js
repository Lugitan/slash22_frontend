import axios from "axios";
import config from "../utils/config";

const backend = () => {
	const client = axios.create({
		baseURL: "http://20.79.222.49:3000/",
		headers: {
			authorization: "Basic test", // `Bearer ${token}`,
		},
	});

	// client.interceptors.response.use(
	// 	(response) => response,
	// 	(error) => error.response,
	// );

	return client;
};

export default backend;
