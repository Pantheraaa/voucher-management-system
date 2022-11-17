const app = require("./app")
const connect = require("./db");
const Employee = require("./models/Employee");
const router = require("./routes/index")
const port = process.env.PORT || 8000;

// Initializing routes:
router(app);

app.get('/', (req, res) => {
    res.send("Home page!")
})

app.get('/hell', (req, res) => {
    res.send("Hell page!")
})

app.listen(port, () => {
    // console.log(process.env.MONGO_URI)
    connect();
    console.log(`App is listening on port ${port}...`);
})