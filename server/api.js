import express from "express"
import cors from "cors"
import { launchers } from "./routes/launchers.js"
import { auth } from "./routes/auth.js"

const app = express()
app.use(express.json())
app.use(cors())

app.use("/api/auth", auth)
app.use("/api/launchers", launchers)

app.listen(8080, () => {
    console.log("server run...");
})
