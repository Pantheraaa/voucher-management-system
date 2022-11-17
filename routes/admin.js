const router = require("./auth.js")
const {getAdmin, newAdmin} = require("../controllers/admin.js")

const ENDPOINT = "admin";

router.get(`/${ENDPOINT}/all`, getAdmin);
router.post(`/${ENDPOINT}/new`, newAdmin);

module.exports = router;