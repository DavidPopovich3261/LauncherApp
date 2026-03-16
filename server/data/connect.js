import mongoose from "mongoose";
import "dotenv/config"
const uri = process.env.MONGO

export async function connectDB() {
    await mongoose.connect(uri);
}





