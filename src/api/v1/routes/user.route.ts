import express, { Request, Response, NextFunction } from "express"
import userController from '../controllers/user.controller.js';
// import { verifySuperAdminToken, verifyUserToken, verifyInstituteToken } from '../middlewares/authMiddleware.js'
import userValidation from '../validations/user.validations.js';
import responseMiddleware from '../middlewares/response.middleware.js'

const userRoute = express.Router()
//userRoute.use(multer().array())

//get routes
userRoute.get('/', (req, res) => {
    res.send(`${process.env.APP_NAME}: User Routes`)
})
userRoute.get('/list', userController.getAdminsList, responseMiddleware)

//post routes
userRoute.post('/create', userValidation.signupValidator, userController.addAdmin, responseMiddleware)

//put routes
userRoute.put('/update', userValidation.updateValidator, userController.updateAdmin, responseMiddleware)

//delete routes
userRoute.delete('/remove', userValidation.deleteUserValidator, userController.deleteUser, responseMiddleware)


export default userRoute