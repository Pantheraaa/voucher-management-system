const mongoose = require("mongoose");

const xlVoucherSchema = new mongoose.Schema({
    voucherCode: {
        type: String,
    },
    status: {
        type: String,
        enum: ["Active", "Claimed", "Expired", "To be Active"],
        default: "Active",
    },
})

module.exports = mongoose.model("XlVoucher", xlVoucherSchema);