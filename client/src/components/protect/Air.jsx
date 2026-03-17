import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { type } from '../../utils/users'

function Air({ children }) {
    const navigate = useNavigate()
    useEffect(() => {
        const getType = async () => {
            const typeUser = await type()
            if (!(typeUser == "air" || typeUser == "admin" || typeUser == "intelligence")) {
                navigate("/login")
            }
        }
        getType()
    }, [])
    return (
        <div>{children}</div>
    )
}

export default Air