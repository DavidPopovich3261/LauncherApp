import { Router } from "express";
import { create, deleteUserById, getAllUsers, getUser, login, updateUser } from "../data/DBfuncAuth.js"
import { admin, intelligence, air } from "../middlewares/role.js";
import { sign } from "../utils/token.js";

export const auth = Router()


auth.post("/register/create", admin, async (req, res) => {
    const { username, password, email, user_type } = req.body
    if (await findByType) {
        res.status(400).json({ "message": "The type already exists" })
        return
    }
    const newUser = await create(username, password, email, user_type, new Date().toLocaleString())
    res.status(200).json(newUser)
})

auth.put("/register/update/:id", admin, async (req, res) => {
    const { id } = req.params
    const { username, password, email, user_type } = req.body
    if (await findByType) {
        res.status(400).json({ "message": "The type already exists" })
        return
    }
    const user = await updateUser(id, username, password, email, user_type)
    res.status(200).json(user)
})

auth.delete("/register/delete/:id", admin, async (req, res) => {
    const { id } = req.params
    const del = await deleteUserById(id)
    res.status(200).json(del)
})

auth.post("/login", async (req, res) => {
    const { username, password } = req.body
    const user = await login(username, password)
    const token = sign(user.user_type, user.username)
    res.status(200).json({ user, token })
})

auth.get("/getUser", air, async (req, res) => {
    const { user_type, username } = req.user
    const user = await getUser(user_type, username)
    res.status(200).json(user)
})

auth.get("/getAllUsers", admin, async (req, res) => {
    const users = await getAllUsers()
    res.status(200).json(users)
})