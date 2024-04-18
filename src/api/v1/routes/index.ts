import express from "express"
// import { verifyApiKey } from "../middlewares/authMiddleware.js"
import userRoute from "./userRoute.js"

// const swaggerDocument = JSON.parse(
//   await readFile(new URL("../../../../swagger-output.json", import.meta.url))
// )

const router = express.Router()

router.get('/',(req,res)=>{
    res.send(`${process.env.APP_NAME}: Version 1 API's`)
})

// router.use("/docs", swaggerUi.serve)
// router.get("/docs", swaggerUi.setup(swaggerDocument), () => {
//   // #swagger.ignore = true
// })

// router.use(verifyApiKey) // add in all the below routes

router.use("/user", userRoute)

export default router
