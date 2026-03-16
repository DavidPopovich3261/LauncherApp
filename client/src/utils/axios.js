import axios from "axios"

export async function getAll() {
    const res = await axios.get("http://localhost:8080/api/launchers/")
    return res.data
}

export async function send(e, name, rocketType, latitude, longitude, city) {
    e.preventDefault()
    if (name != "" && rocketType != "" && latitude != undefined && longitude != undefined && city != "") {
        const res = await axios.post("http://localhost:8080/api/launchers/", JSON.stringify({ name, rocketType, latitude, longitude, city }), { headers: { 'Content-Type': 'application/json' } })
        return res.data
    } else { alert("The fields are invalid.") }
}

export async function getById(id) {
    if (id != undefined) {
        const res = await axios.get(`http://localhost:8080/api/launchers/${id}`)
        return res.data
    }

}

export async function deleteOne(id) {
    if (id != undefined) {
        const res = await axios.delete(`http://localhost:8080/api/launchers/${id}`)
        return res.data
    }
}


export async function update(pathId, city, rocketType, latitude, longitude, name) {
    if (pathId != undefined, name != "" && rocketType != "" && latitude != undefined && longitude != undefined && city != "") {
        const res = await axios.put(`http://localhost:8080/api/launchers/${pathId}`,
            JSON.stringify({ name, rocketType, latitude, longitude, city }), { headers: { 'Content-Type': 'application/json' } })
        return res
    }
}