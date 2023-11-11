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

app.use((err , req, res, next )=>{
    const statusCode = err.statusCode || 500
    const message = err.message || "internal server error"
    return res.status(statusCode).json(({
        success: false,
        statusCode,
        message
    }))

})




app.listen(port, console.log(`app is runing port ${port}`))