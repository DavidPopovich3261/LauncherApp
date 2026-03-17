import React, { useEffect, useState } from 'react'
import { deleteUser, getAllUsers } from '../utils/users'
import { useNavigate } from 'react-router'

function Users() {
    const navigate = useNavigate()
    const [users, setUsers] = useState([])
    const [flag, setFlag] = useState(true)
    useEffect(() => {
        const get = async () => {
            const res = await getAllUsers()
            setUsers(res)
        }
        get()
    }, [flag])
    return (
        <div>{users &&
            <table>
                <tbody>
                    <tr>
                        <th>id</th>
                        <th>username</th>
                        <th>password</th>
                        <th>email</th>
                        <th>user_type</th>
                        <th>last_login</th>
                    </tr>
                    {users.map((user) => {
                        return (
                            <tr key={user._id}>
                                <td>{user._id}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.email}</td>
                                <td>{user.user_type}</td>
                                <td>{user.last_login}</td>
                                <td>
                                    <button onClick={() => navigate(`editUser${user._id}`)}>edit</button>
                                    <button onClick={() => {
                                        deleteUser(user._id)
                                        setFlag(!flag)
                                    }}>delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        }</div >
    )
}

export default Users