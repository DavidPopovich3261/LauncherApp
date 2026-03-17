import React, { useState } from 'react'
import { create } from '../utils/users'

function Register() {
  const [user_type, setUser_type] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  return (
    <div>
      <form >
        <input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
        <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
        <input type="email" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
        <select onChange={(e) => setUser_type(e.target.value)}>
          <option value="">Choose one of the options...</option>
          <option value="admin">admin</option>
          <option value="intelligence">intelligence</option>
          <option value="air">air</option>
        </select>
        <button onClick={(e) => { create(e, username, password, email, user_type) }}>create</button>
      </form>
    </div>
  )
}

export default Register