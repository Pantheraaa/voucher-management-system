import { deleteEmployee, getEmployees, newEmployee, updateEmployee } from "../controllers/employee.js";
import router from "./auth.js";

const ENDPOINT = "employee";
router.get(`/${ENDPOINT}/all`, getEmployees);
router.post(`/${ENDPOINT}/new`, newEmployee);
router.put(`/${ENDPOINT}/update/:empId`, updateEmployee);
router.delete(`/${ENDPOINT}/delete/:empId`, deleteEmployee);

export default router;