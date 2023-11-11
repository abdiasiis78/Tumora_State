import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoute from './routes/user.rout.js'
import AuthRoute from './routes/auth.rout.js'
dotenv.config()

const app = express()
const port = 3000

app.use(express.json())
mongoose.connect(process.env.MOONGO).then(() => {
    console.log("Connected to moongDB")
}).catch((err) => {
    console.log(err);
})


app.use("/api/user", userRoute)
app.use("/api/auth", AuthRoute)

app.listen(port, console.log(`app is runing port ${port}`))