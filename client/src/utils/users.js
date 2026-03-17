import axios from "axios";

export async function login(username, password) {
    const res = await axios.post("http://localhost:8080/api/auth/login", JSON.stringify({ username, password }), { headers: { 'Content-Type': 'application/json' } })
    localStorage.setItem('token', res.data['token'])
    return res.data['user']
}

export async function getAllUsers() {
    const res = await axios.get("http://localhost:8080/api/auth/getAllUsers",
        {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
    return res.data
}


export async function deleteUser(id) {
    if (id != undefined) {
        const res = await axios.delete(`http://localhost:8080/api/auth/register/delete/${id}`, {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })
        return res.data
    }
}

export async function create(e, username, password, email, user_type) {
    e.preventDefault()
    if (username != "" && password != "" && email != "" && user_type != "") {
        const res = await axios.post("http://localhost:8080/api/auth/register/create",
            JSON.stringify({ username, password, email, user_type }),
            {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                }
            })
        if (res.data["message"] == "The type already exists") {
            alert("The type already exists")
        } else { alert("Created successfully") }
        return res.data
    } else { alert("The fields are invalid.") }
}

export async function edit(e, id, username, password, email, user_type) {
    e.preventDefault()
    if (username != "" && password != "" && email != "" && user_type != "") {
        const res = await axios.put(`http://localhost:8080/api/auth/register/update/${id}`,
            JSON.stringify({ username, password, email, user_type }),
            {
                headers:
                {
                    'Content-Type': 'application/json',
                    'Authorization': localStorage.getItem('token')
                }
            })
        if (res.data["message"] == "The type already exists") {
            alert("The type already exists")
        } else {
            alert("Successfully edited")
        }
        return res.data
    } else { alert("The fields are invalid.") }
}

export async function logged() {
    const res = await axios.get("http://localhost:8080/api/auth/getUser",
        {
            headers: {
                'Authorization': localStorage.getItem('token')
            }
        })

    alert(`${res.data[0].username}, ${res.data[0].user_type}`)
    return res.data
}

export async function type() {
    try {
        const res = await axios.get("http://localhost:8080/api/auth/getUser",
            {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            })
        return res.data[0].user_type
    } catch (error) {
        return ""
    }
}
