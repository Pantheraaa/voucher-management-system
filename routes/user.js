const router = require("./auth");
const {getAllUsers, newUser, updateUser, deleteUser} = require("../controllers/user")

const ENDPOINT = "user";
router.get(`/${ENDPOINT}/all`, getAllUsers);
router.post(`/${ENDPOINT}/new`, newUser);
router.patch(`/${ENDPOINT}/update/:userId`, updateUser);
router.delete(`/${ENDPOINT}/delete/:userId`, deleteUser);

module.exports = router;