import express from "express"
import cors from "cors"
import { launchers } from "./routes/launchers.js"

const app = express()
app.use(express.json())
app.use(cors())
app.use("/api/launchers", launchers)

// app.get("/api",(req,res)=>{
//     console.log("hi");
    
// })

app.listen(8080, () => {
    console.log("server run...");
})
