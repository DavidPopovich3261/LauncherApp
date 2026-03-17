import { connectDB } from "./connect.js"
import mongoose from "mongoose"

await connectDB()

const UsersSchems = new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    user_type: String,
    last_login: Date
})

const Users = mongoose.model('Users', UsersSchems)

export async function getUser(user_type, username) {
    const user = Users.find({ username: username, user_type: user_type })
    return user
}

export async function create(username, password, email, user_type, last_login) {
    const user = new Users({ username, password, email, user_type, last_login })
    const res = await user.save()
    return res
}

export async function deleteUserById(id) {
    const del = await Users.findOneAndDelete({ _id: id })
    return del
}

export async function login(username, password) {
    const user = await Users.findOneAndUpdate({ username, password }, { last_login: new Date().toLocaleString() })
    return user
}

export async function getAllUsers() {
    const users = await Users.find()
    return users
}

export async function updateUser(id, username, password, email, user_type) {
    const user = Users.findByIdAndUpdate(id, { username, password, email, user_type })
    return user
}

export async function findByType(user_type) {
    const user = await Users.find({ user_type })
    if (user) {
        return true
    }
    return false
}