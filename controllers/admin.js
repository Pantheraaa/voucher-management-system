const Admin = require("../models/Admin.js")

const getAdmin = async (req, res) => {
    try {
        let fetchedAdmin = await Admin.find();

        res.json({
            success: true,
            message: "Admin details found successfully!",
            data: fetchedAdmin,
        })
    } catch (error) {
        console.log(error)
    }
}

const newAdmin = async (req, res, next) => {
    let data = req.body;
    try {
        let newAdmin = new Admin({
            name: data.name,
            username: data.username,
            password: data.password,
            securityKey: data.securityKey,
        })
        await newAdmin.save();
        res.json({
            success: true,
            message: "Admin created successfully!",
            data: newAdmin
        })
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    getAdmin,
    newAdmin,
}