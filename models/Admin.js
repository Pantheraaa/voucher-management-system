import mongoose from 'mongoose';

const adminModel = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    securityKey: {
        type: String,
        required: true,
    },
});

export default mongoose.model("Admin", adminModel);