import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

mongoose.connect(process.env.MOONGO).then(() => {
    console.log("Connected to moongDB")
}).catch((err) => {
    console.log(err);
})
const app = express()

const port = 3000

app.listen(port, console.log(`app is runing port ${port}`))