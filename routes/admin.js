import router from "./auth.js";
import {getAdmin, newAdmin} from "../controllers/admin.js";

const ENDPOINT = "admin";

router.get(`/${ENDPOINT}/all`, getAdmin);
router.post(`/${ENDPOINT}/new`, newAdmin);

export default router;