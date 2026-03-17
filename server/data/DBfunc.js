import { type } from "../../client/src/utils/users.js"
import { connectDB } from "./connect.js"
import mongoose from "mongoose"

await connectDB()

const launchersSchema = new mongoose.Schema({
    city: String,
    rocketType: String,
    latitude: Number,
    longitude: Number,
    name: String,
    destroyed: { type: Boolean, default: false }
})


const launchers = mongoose.model('launchers', launchersSchema)

export async function findAll() {
    const all = await launchers.find()
    return all
}

export async function insert(city, rocketType, latitude, longitude, name) {
    const launcher = new launchers({ city: city, rocketType: rocketType, latitude: latitude, longitude: longitude, name: name })
    const res = await launcher.save()
    return res
}

export async function findbyid(id) {
    const launcher = await launchers.find({ _id: id })
    return launcher[0]
}

export async function deletebyid(id) {
    const del = await launchers.findOneAndDelete({ _id: id })
    return del
}

export async function putById(id, city, rocketType, latitude, longitude, name) {
    try {
        const chinge = await launchers.findByIdAndUpdate(id, { city, rocketType, latitude, longitude, name })
        return chinge
    } catch (error) {
        console.log(error);
    }
}

export async function destroyed(id) {
    try {
        const chinge = await launchers.findByIdAndUpdate(id,{ destroyed: true })
        return chinge
    } catch (error) {
        console.log(error);
    }
}




