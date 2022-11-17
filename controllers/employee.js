const Employee = require("../models/Employee.js")

const getEmployees = async (req, res) => {
    try {
        let fetchedEmployees = await Employee.find({isDeleted: false});

        res.json({
            success: true,
            message: "Employees found successfully!",
            data: fetchedEmployees,
        })
    } catch (error) {
        console.log(error)
    }
}

const newEmployee = async (req, res) => {
    const data = req.body;
    try {
        let empIdPre = (userName) => {
            return userName.slice(0, 3).toUpperCase();
        }
        let empIdPost = Math.floor(1000 + Math.random() * 9000);
        let newEmployee = new Employee({
            empId: (empIdPre(data.name) + empIdPost),
            name: data.name,
            email: data.email,
            address: {
                city: data.address.city,
                state: data.address.state,
            },
            mobile: data.mobile,
            username: data.email,
            password: (empIdPre(data.name) + empIdPost),
        })
        await newEmployee.save();
        res.json({
            success: true,
            message: "New employee created successfully!",
            data: newEmployee
        })
    } catch (error) {
        console.log(error)
    }
}

const updateEmployee = async (req, res) => {
    let id = req.params.empId;
    let data = req.body;
    try {
        let fetchedEmployee = await Employee.findOneAndUpdate({empId: id}, data);
        await fetchedEmployee.save();
        res.json({
            success: true,
            message: "Employee updated successfully!",
            data: fetchedEmployee,
        })
    } catch (error) {
        console.log(error)
    }
}

const deleteEmployee = async (req, res) => {
    let id = req.params.empId;
    try {
        let fetchedEmployee = await Employee.findOneAndUpdate({empId: id}, {isDeleted: true});
        await fetchedEmployee.save();
        res.json({
            success: true,
            message: "Employee deleted successfully!",
            data: fetchedEmployee,
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    getEmployees,
    newEmployee,
    updateEmployee,
    deleteEmployee
}