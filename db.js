const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const DB_LINK = "mongodb://127.0.0.1:27017/VMS";

const connect = async () => {
    mongoose.connect(DB_LINK);
    console.log("DB connected!")
}

module.exports = connect;