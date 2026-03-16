import React from 'react'
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { update } from '../utils/axios';

function Update() {
    const navigate = useNavigate()
    const { id } = useParams()
    const [pathId, setPathId] = useState(id)
    const [name, setName] = useState("")
    const [city, setCity] = useState("")
    const [latitude, setLatitude] = useState()
    const [longitude, setLongitude] = useState()
    const [rocketType, setRocketType] = useState("")
    return (
        <div>
            <h1>UPDATE</h1>
            <Link to={"/"}>HOME</Link>
            <Link to={`/LauncherDetails/${pathId}`}>Details</Link>
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
                    update(pathId, name, rocketType, latitude, longitude, city)
                    navigate("/")
                }}>update</button>
            </form>
        </div>
    )
}

export default Update