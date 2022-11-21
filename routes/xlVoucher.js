const router = require("./auth");
const { getXlVouchers, newXlVoucher } = require("../controllers/xlVoucher");
const upload = require("../middlewares/multer");

const ENDPOINT = "xl/voucher";
router.get(`/${ENDPOINT}/all`, getXlVouchers);
router.post(`/${ENDPOINT}/new`, upload.single('file'), newXlVoucher);
// router.patch(`/${ENDPOINT}/update/:vouchId`, updateUser);
// router.delete(`/${ENDPOINT}/delete/:vouchId`, deleteUser);

module.exports = router;