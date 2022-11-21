const userRouter = require("./user")
const adminRouter = require("./admin")
const employeeRouter = require("./employee")
const voucherRouter = require("./voucher");
const xlVoucherRouter = require("./xlVoucher");

const VERSION = "v1";

function router(app) {
    app.use(`/${VERSION}/`, userRouter);
    app.use(`/${VERSION}/`, adminRouter);
    app.use(`/${VERSION}/`, employeeRouter);
    app.use(`/${VERSION}/`, voucherRouter);
    app.use(`/${VERSION}/`, xlVoucherRouter);
}


module.exports = router;