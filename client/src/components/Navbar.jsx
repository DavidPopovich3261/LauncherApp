import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router'
import { logged, type } from '../utils/users'
import { useState } from 'react'

function Navbar() {
  const navigate = useNavigate()
  const [typeUser, setTypeUser] = useState()
  useEffect(() => {
    const getType = async () => {
      const typeU = await type()
      setTypeUser(typeU)
    }
    getType()
  }, [])
  return (
    <>
      <Link to={"/login"}>login</Link>
      {(typeUser == "air" || typeUser == "admin" || typeUser == "intelligence") &&
        <div>
          <Link to={"/"}>HOME</Link>
          {(typeUser == "admin" || typeUser == "intelligence") &&
            <Link to={"AddLauncher"}>AddLauncher</Link>
          }
          <button onClick={() => { logged() }}>logged</button>
          <button onClick={() => {
            localStorage.clear()
            navigate("/")
          }
          }>Logout</button>
          {typeUser == "admin" &&
            <>
              <Link to={"/users"}>users</Link>
              <Link to={"/register"}>register</Link>
            </>
          }
        </div>
      }
    </>
  )
}

export default Navbar