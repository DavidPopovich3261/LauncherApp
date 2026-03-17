import { Router } from "express";
import { deletebyid, destroyed, findAll, findbyid, insert, putById } from "../data/DBfunc.js";
import { admin, intelligence, air } from "../middlewares/role.js";
export const launchers = Router()

launchers.get("/", air, async (req, res) => {
    const allLaunchers = await findAll()
    res.status(200).json({ allLaunchers })
})

launchers.get("/:id", air, async (req, res) => {
    const { id } = req.params
    const launcher = await findbyid(id)
    res.status(200).json({ launcher })
})

launchers.post("/", intelligence, async (req, res) => {
    if (req.body) {
        const { city, rocketType, latitude, longitude, name } = req.body
        if (city && rocketType && latitude && longitude && name) {
            const { city, rocketType, latitude, longitude, name } = req.body
            const inserted = await insert(city, rocketType, latitude, longitude, name)
            if (inserted) {
                res.status(200).json({ inserted })
                return
            }
        }
    }
    res.status(400).json({ "messeg": "bed req" })
})

launchers.delete("/:id", intelligence, async (req, res) => {
    const { id } = req.params
    const del = await deletebyid(id)
    res.status(200).json({ del })
})

launchers.put("/:id", intelligence, async (req, res) => {
    const { id } = req.params
    if (req.body) {
        const { city, rocketType, latitude, longitude, name } = req.body
        if (city && rocketType && latitude && longitude && name) {
            const chinge = await putById(id, city, rocketType, latitude, longitude, name)
            if (chinge) {
                res.status(200).json({ "messeg": "update" })
            }
        }
    }

})

launchers.get("/destroyed/:id", air, async (req, res) => {
    const { id } = req.params
    await destroyed(id)
    res.status(200).json({ "messeg": "Updated successfully" })
})