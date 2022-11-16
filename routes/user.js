import router from "./auth.js";
import {deleteUser, getAllUsers, newUser, updateUser} from "../controllers/user.js";

const ENDPOINT = "user";
router.get(`/${ENDPOINT}/all`, getAllUsers);
router.post(`/${ENDPOINT}/new`, newUser);
router.put(`/${ENDPOINT}/update/:userId`, updateUser);
router.delete(`/${ENDPOINT}/delete/:userId`, deleteUser);

export default router;