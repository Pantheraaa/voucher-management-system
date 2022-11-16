import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_LINK = process.env.MONGO_URI;

const connect = async () => {
    mongoose.connect(DB_LINK);
    console.log("DB connected!")
}

export default connect;