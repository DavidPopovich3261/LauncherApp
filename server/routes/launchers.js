import { Router } from "express";
import { deletebyid, findAll, findbyid, insert } from "../data/DBfunc.js";

export const launchers = Router()

launchers.get("/", async (req, res) => {
    const allLaunchers = await findAll()
    res.status(200).json({ allLaunchers })
})

launchers.get("/:id", async (req, res) => {
    const { id } = req.params
    const launcher = await findbyid(id)
    res.status(200).json({ launcher })
})

launchers.post("/", async (req, res) => {
    const { city, rocketType, latitude, longitude, name } = req.body
    const inserted = await insert(city, rocketType, latitude, longitude, name)
    res.status(200).json({ inserted })
})

launchers.delete("/:id", async (req, res) => {
    const { id } = req.params
    const del = await deletebyid(id)
    res.status(200).json({ del })
})