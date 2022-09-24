export async function getTrash(base_url) {
    try {
        const response = await fetch(`${base_url}/trash`, {
            method: 'GET',
            headers: {
                "user_id": user_id,
                "user_token": token
            }
        })
        const data = await response.json()
        return data;
    }
    catch (err) {
        return console.log(err)
    }
}

export async function reportTrash(base_url, geo_location, image_url, user_id, token) {
    try {
        const response = await fetch(`${base_url}/trash`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "user_id": user_id,
                "user_token": token
            },
            body: {
                "latitude": geo_location.latitude,
                "longitude": geo_location.longitude,
                "image_url": image_url
            }
        });
        const data = await response.json();
        return data;
    } catch (err) {
        return console.log(err);
    }
}

export async function createNewTrash(base_url, geo_location, image_url, user_id, token) {
    try {
        const response = await fetch(`${base_url}/trash/new`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
                "user_id": user_id,
                "user_token": token
            },
            body: {
                "latitude": geo_location.latitude,
                "longitude": geo_location.longitude,
                "image_url": image_url
            }
        });
        const data = await response.json();
        return data;
    } catch (err) {
        return console.log(err);
    }
}

export async function upvoteTrash(base_url, user_id, token, trash_id) {
    try {
        const response = await fetch(`${base_url}/trash`, {
            method: 'SET',
            headers: {
                "Content-Type": 'application/json',
                "user_id": user_id,
                "user_token": token
            },
            body: {
                "id": trash_id
            }
        });
        const data = await response.json();
        return data;
    } catch (err) {
        return console.log(err);
    }
}

export async function pickupTrash(base_url, user_id, token, trash_id) {
    try {
        const response = await fetch(`${base_url}/trash`, {
            method: 'DELETE',
            headers: {
                "Content-Type": 'application/json',
                "user_id": user_id,
                "user_token": token
            },
            body: {
                "id": trash_id
            }
        });
        const data = await response.json();
        return data;
    } catch (err) {
        return console.log(err);
    }
}
