import axios from "axios";
import config from "../utils/config";

const backend = () => {
	const client = axios.create({
		baseURL: "https://trashhunter-qrvp7uu2ja-lm.a.run.app/", //"http://localhost:8080/"
		headers: {
			user_name: "gilles", // `Bearer ${token}`,
			//Accept: "*/*"
		},
	});

	// client.interceptors.response.use(
	// 	(response) => response,
	// 	(error) => error.response,
	// );

	return client;
};

export default backend;
