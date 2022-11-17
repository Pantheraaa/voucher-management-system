const userRouter = require("./user")
const adminRouter = require("./admin")
const employeeRouter = require("./employee")

const VERSION = "v1";

function router(app) {
    app.use(`/${VERSION}/`, userRouter);
    app.use(`/${VERSION}/`, adminRouter);
    app.use(`/${VERSION}/`, employeeRouter);
}


module.exports = router;