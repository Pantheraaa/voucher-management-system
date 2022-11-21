const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// const DB_LINK = "mongodb://127.0.0.1:27017/VMS";
const DB_LINK = "mongodb+srv://admin:admin@cluster0.7xiiorf.mongodb.net/?retryWrites=true&w=majority";

const connect = async () => {
    mongoose.connect(DB_LINK);
    console.log("DB connected!")
}

module.exports = connect;