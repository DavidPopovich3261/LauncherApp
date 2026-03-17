import React, { useEffect, useState } from 'react'
import { send } from '../utils/axios'
import { Link, useNavigate } from "react-router";

function AddLauncher() {
    const navigate = useNavigate()
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [rocketType, setRocketType] = useState("")
    return (
        <div>
            <h1>ADD LAUNCHER</h1>
            <form >
                <div>
                    <input type="text" placeholder='name' onChange={(e) => { setName(e.target.value) }} />
                    <input type="number" name="" id="" placeholder='latitude' onChange={(e) => { setLatitude(e.target.value) }} />
                    <input type="number" name="" id="" placeholder='longitude' onChange={(e) => { setLongitude(e.target.value) }} />
                    <input type="text" placeholder='city' onChange={(e) => { setCity(e.target.value) }} />
                    <select name="" id="" value={rocketType} onChange={(e) => {
                        setRocketType(e.target.value)
                    }} >
                        <option value="">Choose one of the options...</option>
                        <option value="Shahab3">Shahab3</option>
                        <option value="Fetah110">Fetah110</option>
                        <option value="Radwan">Radwan</option>
                        <option value="Kheibar">Kheibar</option>
                    </select>
                </div>
                <button onClick={(e) => {
                    send(e, name, rocketType, latitude, longitude, city)
                    alert("ADD LAUNCHER")
                    navigate("/")
                }}>send</button>
            </form>
        </div>
    )
}

export default AddLauncher