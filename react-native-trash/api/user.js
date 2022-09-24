export async function getUser(base_url, user_id, token) {
    try {
        const response = await fetch(`${base_url}/user`, {
            method: 'GET',
            headers: {
                "user_id": user_id,
                "user_token": token
            }
        })
        const data = await response.json()
        return data
    }
    catch (err) {
        return console.log(err)
    }
}

export async function createUser(base_url, user_id, token) {
    try {
        const response = await fetch(`${base_url}/user`, {
            method: 'POST',
            header: {
                "Content-Type": 'application/json',
                "user_id": user_id,
                "user_token": token
            },
            body: {
                "user_name": ''
            }
        })
    }
    catch (err) {
        return console.log(err)
    }
}
