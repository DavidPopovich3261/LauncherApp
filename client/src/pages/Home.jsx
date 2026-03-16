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
            const res = await getAll()
            setLaunchers(res.allLaunchers)
        }
        get()
    }, [])
    return (
        <div>
            <h1>HOME</h1>
            <Link to={"AddLauncher"}>AddLauncher</Link>
            <div>
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
            </div>
            {launchers[0] ?
                < table >
                    <tbody>

                        <tr>
                            <th>name</th>
                            <th>city</th>
                            <th>latitude</th>
                            <th>longitude</th>
                            <th>rocketType</th>
                        </tr>
                        {launchers.filter((launcher) => {
                            if ((launcher.city.includes(filterCity.toLocaleLowerCase())) && (launcher.rocketType == filterRocketType || filterRocketType == "all")) {
                                return launcher
                            }
                        }).map((launcher) => {
                            return (
                                <tr key={launcher._id} onClick={() => navigate(`LauncherDetails/${launcher._id}`)}>
                                    <td> {launcher.name}</td>
                                    <td>{launcher.city}</td>
                                    <td>{launcher.latitude}</td>
                                    <td>{launcher.longitude}</td>
                                    <td>{launcher.rocketType}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table> : <h3>The launcher list is empty.</h3>
            }
        </div>
    )
}

export default Home