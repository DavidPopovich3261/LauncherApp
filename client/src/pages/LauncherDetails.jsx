import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from "react-router";
import { deleteOne, destroyed, getById } from '../utils/axios';

function LauncherDetails() {
  const navigate = useNavigate()

  const { id } = useParams()
  const [pathId, setPathId] = useState(id)
  const [launcher, setLauncher] = useState({})
  useEffect(() => {
    setPathId(id)
    const get = async () => {
      const res = await getById(pathId)
      setLauncher(res.launcher)
    }
    get()
  }, [id])
  return (
    <>
      <h1>LAUNCHER DETAILS</h1>
      <div>{launcher &&
        <div className='card'>
          <p>id :{launcher._id}</p>
          <p>name :{launcher.name}</p>
          <p>city :{launcher.city}</p>
          <p>latitude :{launcher.latitude}</p>
          <p>longitude :{launcher.longitude}</p>
          <p>rocketType :{launcher.rocketType}</p>
          <p>destroyed :{launcher.destroyed}</p>
          <button onClick={() => {
            deleteOne(pathId)
            navigate("/")
          }}>DELETE</button>
          <button onClick={() => {
            navigate(`/Update/${pathId}`)
          }}
          >Update</button>
          <button onClick={() => { destroyed(launcher._id) }}>destroyed</button>
        </div>
      }</div>
    </>
  )
}

export default LauncherDetails