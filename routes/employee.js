const { deleteEmployee, getEmployees, newEmployee, updateEmployee } = require("../controllers/employee.js")
const router = require("./auth.js")

const ENDPOINT = "employee";
router.get(`/${ENDPOINT}/all`, getEmployees);
router.post(`/${ENDPOINT}/new`, newEmployee);
router.patch(`/${ENDPOINT}/update/:empId`, updateEmployee);
router.delete(`/${ENDPOINT}/delete/:empId`, deleteEmployee);

module.exports = router;