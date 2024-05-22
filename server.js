require("dotenv").config()
const express = require('express');
const app = express()
const port = process.env.PORT || 4090
const cors = require('cors')
const connectDB = require('./database/connect');
const adminRouter = require("./routes/auth");
const employeeRouter = require("./routes/employee");
const companyRouter = require("./routes/Company");
const surveyRouter = require('./routes/surveys');
const loginRoute = require("./routes/login");



app.use(express.json({ limit: "50mb" }))
connectDB()
app.use(cors())

app.use(cors({
    origin: [ 'http://localhost:3000/', 'https://bsrate-mvp-testing.vercel.app'],  // Update with your frontend's domain
}));

app.use("/api/v2", adminRouter)
app.use("/api/v2", employeeRouter)
app.use("/api/v2", companyRouter)
app.use("/api/v2", loginRoute)
app.use('/api/v2', surveyRouter)

app.get("/testing", (req, res) => {
    res.status(200).json({
        successs: true,
        msg: "Bsrate node"
    })
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})