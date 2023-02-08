const mongoose=require('mongoose')
require('dotenv').config();
const mongoURL=process.env.mongoURL
mongoose.connect(mongoURL)
mongoose.connection.on("connected",()=>console.log("Database Connected !!"))
mongoose.connection.on("error",()=>console.log("Database Connection error !!"))