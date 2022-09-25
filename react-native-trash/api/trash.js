const base_url = "https://trashhunter-qrvp7uu2ja-lm.a.run.app";
const storage_url = "gs://hackathon-trash.appspot.com";

export async function getTrash(user_name) {
	try {
		const response = await fetch(`${base_url}/trash`, {
			method: "GET",
			headers: {
				user_name: user_name,
			},
		});
		const data = await response.json();
		return data;	
	} catch (err) {
		return console.log(err);
	}
}

export async function reportTrash(geo_location, image_url, user_name) {

	let requestOptions = {
		method: "POST",
		headers: {
			"Content-Type": 'application/json',
			user_name: user_name
		},
		body: JSON.stringify({
			"latitude": geo_location.latitude,
			"longitude": geo_location.longitude,
			"image_url": image_url
		}),
		redirect: "follow"
	};
	await fetch(base_url + "/trash", requestOptions)
		.catch((error) => console.log("error", error))
}

export async function createNewTrash(geo_location, image_url, user_id, token) {
	try {
		const response = await fetch(`${base_url}/trash/new`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				user_id: user_id,
				user_token: token,
			},
			body: {
				latitude: geo_location.latitude,
				longitude: geo_location.longitude,
				image_url: image_url,
			},
		});
		const data = await response.json();
		return data;
	} catch (err) {
		return console.log(err);
	}
}

export async function upvoteTrash(user_id, token, trash_id) {
	try {
		const response = await fetch(`${base_url}/trash`, {
			method: "SET",
			headers: {
				"Content-Type": "application/json",
				user_id: user_id,
				user_token: token,
			},
			body: {
				id: trash_id,
			},
		});
		const data = await response.json();
		return data;
	} catch (err) {
		return console.log(err);
	}
}

export async function pickupTrash(user_id, token, trash_id) {
	try {
		const response = await fetch(`${base_url}/trash`, {
			method: "DELETE",
			headers: {
				"Content-Type": "application/json",
				user_id: user_id,
				user_token: token,
			},
			body: {
				id: trash_id,
			},
		});
		const data = await response.json();
		return data;
	} catch (err) {
		return console.log(err);
	}
}
