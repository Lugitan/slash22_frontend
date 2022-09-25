const base_url = "https://trashhunter-qrvp7uu2ja-lm.a.run.app";

export async function getUser(user_id) {
    try {
        const response = await fetch(`${base_url}/user`, {
            method: 'GET',
            headers: {
                "user_name": user_id
            }
        })
        const data = await response.json()
        return data
    }
    catch (err) {
        return console.log(err)
    }
}

export async function createUser(user_id) {
    try {
        const response = await fetch(`${base_url}/user`, {
            method: 'POST',
            header: {
                "Content-Type": 'application/json',
                "user_name": user_id
            },
            body: {
                "user_name": ''
            }
        })
        const data = await response.json()
        return data
    }
    catch (err) {
        return console.log(err)
    }
}

export async function getLeaderBoard(user_id) {
    try {
        const response = await fetch(`${base_url}/user/leaderboard`, {
            method: 'GET',
            header: {
                "user_name": user_id
            }
        })
        const data = await response.json()
        return data
    }
    catch (err) {
        return console.log(err)
    }
}
