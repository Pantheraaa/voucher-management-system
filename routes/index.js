import userRouter from "./user.js";
import adminRouter from "./admin.js"
import employeeRouter from "./employee.js";

const VERSION = "v1";

function router(app) {
    app.use(`/${VERSION}/`, userRouter);
    app.use(`/${VERSION}/`, adminRouter);
    app.use(`/${VERSION}/`, employeeRouter);
}


export default router;