import mongoose from 'mongoose';

const userModel = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    address: {
        city: {
            type: String,
        },
        state: {
            type: String,
        },
    },
    mobile: {
        type: String,
        required: true,
        unique: true
    },
    coupans: [String],
    coupansClaimed: [String],
    ordersPlaced: [String],
    isDeleted: {
        type: Boolean,
        default: false
    }
});

export default mongoose.model("User", userModel);