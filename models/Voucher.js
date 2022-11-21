const mongoose = require('mongoose');

const voucherSchema = new mongoose.Schema({
    voucherCode: {
        type: String,
        required: true,
    },
    voucherType: {
        type: String,
        required: true,
        enum: ["Percentage Discount", "Amount Discount", "Cashback"],
    },
    voucherAmount: {
        type: Number,
        required: true,
    },
    offerName: {
        type: String,
        required: true,
    },
    validFrom: {
        type: Date,
        required: true,
    },
    validUpTo: {
        type: Date,
        required: true,
    },
    minimumCartValue: {
        type: Number,
        required: true,
    },
    maximumTimeUsage: {
        type: Number,
        required: true,
        default: 1,
    },
    usedTimes: {
        type:Number,
    },
    productCategory: {
        type: String,
        required: true,
    },
    generatedMethod: {
        type: String,
        required: true,
        enum: ["Manually", "System"],
        default: "Manually",
    },
    generatedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Employee',
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ["Active", "Claimed", "Expired"],
        default: "Active"
    },
    claimedBy: {
        type: String,
        ref: 'User',
    },
    claimedOrder: {
        type: String,
    },
    isDeleted: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("Voucher", voucherSchema);