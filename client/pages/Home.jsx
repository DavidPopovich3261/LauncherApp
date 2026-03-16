import React, { useEffect, useState } from 'react'
import { getAll } from '../utils/axios'
import { Link, useNavigate } from "react-router";

function Home() {
    const [launchers, setLaunchers] = useState([])
    const [filterCity, setFilterCity] = useState("")
    const [filterRocketType, setFilterRocketType] = useState("all")
    const navigate = useNavigate()
    useEffect(() => {
        const get = async () => {
            setLaunchers(await getAll())
        }
        get()
    }, [])
    return (
        <div>
            <Link to={"AddLauncher"}>AddLauncher</Link>
            <input type='text' placeholder='city' onChange={(e) => {
                setFilterCity(e.target.value)
            }}></input>
            <select name="" id="" onChange={(e) => {
                setFilterRocketType(e.target.value)
            }} >
                <option value="all">all</option>
                <option value="Shahab3">Shahab3</option>
                <option value="Fetah110">Fetah110</option>
                <option value="Radwan">Radwan</option>
                <option value="Kheibar">Kheibar</option>
            </select>
            {launchers["allLaunchers"] && launchers["allLaunchers"].filter((launcher) => {
                if ((launcher.city.includes(filterCity.toLocaleLowerCase())) && (launcher.rocketType == filterRocketType || filterRocketType == "all")) {
                    return launcher
                }
            }).map((launcher) => {
                return (
                    <div key={launcher._id} onClick={() => navigate(`LauncherDetails/${launcher._id}`)}>
                        <p>name :{launcher.name}</p>
                        <p>city :{launcher.city}</p>
                        <p>latitude :{launcher.latitude}</p>
                        <p>longitude :{launcher.longitude}</p>
                        <p>rocketType :{launcher.rocketType}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Home