const path = require('path');
const root = path.dirname(require.main.filename);
const XlVoucher = require("../models/XlVoucher");
const reader = require('xlsx');

const getXlVouchers = async (req, res) => {
    try {
        let fetchedVouchers = await XlVoucher.find();

        res.json({
            success: true,
            message: "Vouchers found successfully!",
            data: fetchedVouchers,
        })
    } catch (error) {
        throw error;
    }
}

const newXlVoucher = async (req, res) => {
    const vouchersArr = () => {
        let xlFile = root + '/uploadedVouchers/' + req.file.filename;
        const file = reader.readFile(xlFile);
        let data = [];

        const sheets = file.SheetNames;

        for (let i = 0; i < sheets.length; i++) {
            const temp = reader.utils.sheet_to_json(
                file.Sheets[file.SheetNames[i]]
            )

            temp.forEach((res) => {
                data.push(res)
            })
        }
        return data;
    }


    let vouchers = vouchersArr();
    try {
        for (let voucher of vouchers) {
            await XlVoucher.collection.insertOne({ voucherCode: voucher['VOUCHERS'], status: "To be Active" });
        }

        let fetchedVouchers = await XlVoucher.find();
        res.json({
            success: true,
            message: "All vouchers inserted in DB",
            data: fetchedVouchers,
        })
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getXlVouchers,
    newXlVoucher
}