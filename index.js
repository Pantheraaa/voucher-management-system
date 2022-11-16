import app from "./app.js";
import dotenv, { config } from "dotenv";
import connect from "./db.js";
import router from "./routes/index.js";
dotenv.config();

const port = process.env.PORT || 8000;

// Initializing routes:
router(app);

app.get('/', (req, res) => {
    res.send("Home page!")
})

app.listen(port, () => {
    connect();
    console.log(`App is listening on port ${port}...`);
})