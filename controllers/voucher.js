const ApiError = require("../middlewares/apiError");
const Employee = require("../models/Employee");
const Voucher = require("../models/Voucher");

const getVouchers = async (req, res) => {
    try {
        let vouchers = await Voucher.find({isDeleted: false}).populate('generatedBy');

        res.json({
            success: true,
            message: `${vouchers.length === 0 ? "No vouchers found!" : "Vouchers found successfully!"}`,
            data: vouchers,
        });
    } catch (error) {
        throw error;
    }
}

const newVoucher = async (req, res) => {
    const { voucherType, voucherAmount, offerName, validFrom, validUpTo, minimumCartValue, maximumTimeUsage, productCategory, generatedMethod, generatedBy } = req.body;
    try {

        const uniquePostVouher = () => {
            const length = 7;
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        }

        const voucherCodeGenerator = () => {
            if (generatedMethod == "Manually") {
                return req.body.voucherCodeGenerator;
            } else {
                let offer = offerName;
                const uniquePreVoucher = offer.split(" ").join("").slice(0, 4);
                const preVoucher = uniquePreVoucher.toUpperCase();
                const postVouher = uniquePostVouher();

                return preVoucher + postVouher;
            }
        }

        let voucherCode = voucherCodeGenerator();

        let fetchEmployee = await Employee.findOne({ empId: generatedBy });

        let newVoucher = new Voucher({
            voucherCode: voucherCode,
            voucherType: voucherType,
            voucherAmount: voucherAmount,
            offerName: offerName,
            validFrom: validFrom,
            validUpTo: validUpTo,
            minimumCartValue: minimumCartValue,
            maximumTimeUsage: maximumTimeUsage,
            productCategory: productCategory,
            generatedMethod: generatedMethod,
            generatedBy: fetchEmployee,
        })
        const savedVoucher = await newVoucher.save();

        fetchEmployee.coupansGenerated.push(newVoucher);
        await fetchEmployee.save();

        res.json({
            success: true,
            message: "Voucher generated successfully!",
            data: savedVoucher,
        })
    } catch (error) {
        throw error;
    }
}

const updateVoucher = async (req, res) => {
    let voucherCode = req.params.voucherCode;
    let data = req.body;
    try {
        let fetchedVoucher = await Voucher.findOneAndUpdate({ voucherCode: voucherCode }, {data});
        await fetchedVoucher.save();

        res.json({
            success: true,
            message: "Voucher updated successfully!",
            data: fetchedVoucher,
        });
    } catch (error) {
        throw error;
    }
}

const deleteVoucher = async (req, res) => {
    let voucherCode = req.params.voucherCode;
    try {
        let fetchedVoucher = await Voucher.findOneAndUpdate({ voucherCode: voucherCode }, {isDeleted: true});
        const savedVoucher = await fetchedVoucher.save();

        res.json({
            success: true,
            message: "Voucher deleted successfully!",
            data: savedVoucher,
        });
    } catch (error) {
        throw error;
    }
}

module.exports = {
    getVouchers,
    newVoucher,
    updateVoucher,
    deleteVoucher
}