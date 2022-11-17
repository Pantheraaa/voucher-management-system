const User = require("../models/User.js");

const getAllUsers = async (req, res) => {
    try {
        let fetchedusers = await User.find({isDeleted: false});

        res.json({
            success: true,
            message: "Users found successfully!",
            data: fetchedusers,
        })
    } catch (error) {
        console.log(error)
    }
}

const newUser = async (req, res) => {
    let data = req.body;
    try {
        let userIdPre = (userName) => {
            return userName.slice(0, 3).toUpperCase();
        }
        let userIdPost = Math.floor(1000 + Math.random() * 9000);
        let newUser = new User({
            userId: (userIdPre(data.name) + userIdPost),
            name: data.name,
            address: {
                city: data.address.city,
                state: data.address.state,
            },
            mobile: data.mobile,
            username: data.mobile,
            password: (userIdPre(data.name) + userIdPost),
        })
        await newUser.save();
        res.json({
            success: true,
            message: "New user created successfully!",
            data: newUser
        })
    } catch (error) {
        console.log(error);
    }
}

const updateUser = async (req, res) => {
    let id = req.params.userId;
    let data = req.body;
    try {
        let fetchedUser = await User.findOneAndUpdate({userId: id}, data);
        await fetchedUser.save();
        res.json({
            success: true,
            message: "User updated successfully!",
            data: fetchedUser,
        })
    } catch (error) {
        console.log(error)
    }
}

const deleteUser = async (req, res) => {
    let id = req.params.userId;
    try {
        let fetchedUser = await User.findOneAndUpdate({userId: id}, {isDeleted: true});
        await fetchedUser.save();
        res.json({
            success: true,
            message: "User deleted successfully!",
            data: fetchedUser,
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getAllUsers,
    newUser,
    updateUser,
    deleteUser
}