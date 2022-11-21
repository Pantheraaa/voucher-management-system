const router = require("./auth");
const { getVouchers, newVoucher, updateVoucher, deleteVoucher } = require("../controllers/voucher");

const ENDPOINT = "voucher";
router.get(`/${ENDPOINT}/all`, getVouchers);
router.post(`/${ENDPOINT}/new`, newVoucher);
router.patch(`/${ENDPOINT}/update/:voucherCode`, updateVoucher);
router.delete(`/${ENDPOINT}/delete/:voucherCode`, deleteVoucher);

module.exports = router;