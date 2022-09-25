import axios from "axios";
import config from "../utils/config";

const backend = () => {
	const client = axios.create({
		baseURL: "http://localhost:8080/", //"https://trashhunter-qrvp7uu2ja-lm.a.run.app/",
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
