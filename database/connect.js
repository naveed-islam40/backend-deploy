const mongoose = require('mongoose')

const connectDB = ()=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log(`DB Connected successfully with host ${mongoose.connection.host}`)
    }).catch(err=>{
        console.log("Database connection error", err)
    })
}
module.exports = connectDB