import express from 'express'
import { GoogleAuth, signin, signup } from '../controllers/auth.controll.js'
const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)
router.post("/google", GoogleAuth)





export default router