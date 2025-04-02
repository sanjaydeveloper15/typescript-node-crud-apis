import express from "express"
// import { verifyApiKey } from "../middlewares/authMiddleware.js"
import userRoute from "./user.route.js"

const router = express.Router()

router.get('/',(req,res)=>{
    res.send(`${process.env.APP_NAME}: Version 1 API's`)
})

// router.use(verifyApiKey) // add in all the below routes

router.use("/user", userRoute)

export default router
