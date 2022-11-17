const mongoose = require('mongoose');

const employeeModel = new mongoose.Schema({
    empId: {
        type: String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
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
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    coupansGenerated: [String],
    isDeleted: {
        type: Boolean,
        default: false,
    }
});

module.exports = mongoose.model("Employee", employeeModel);