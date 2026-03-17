import React, { useState } from 'react'
import { login } from '../utils/users'
import { useNavigate } from 'react-router'

function Login() {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  return (
    <div>
      <form>
        <div>
          <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
          <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button onClick={() => {
          login(username, password)
          navigate("/")
        }}>login</button>
      </form>
    </div>
  )
}

export default Login