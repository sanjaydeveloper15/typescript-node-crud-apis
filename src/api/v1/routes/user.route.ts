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
// userRoute.get('/admin/list', verifySuperAdminToken, userValidation.getAdminsValidator, userController.getAdminsList, responseMiddleware)
// userRoute.get('/employee/list', verifyUserToken, userController.getEmployeesList, responseMiddleware)

//post routes
userRoute.post('/create', userValidation.signupValidator, userController.addAdmin, responseMiddleware)

//put routes
// userRoute.put('/institute/person/update', verifyInstituteToken, uploadSingleImg, userValidation.updateValidator, userController.updateInstitutePerson, responseMiddleware)
// userRoute.put('/verified/set/new/password', multer().array(), forgotPasswordValidation.passwordValidator, forgotPasswordController.passwordRequest, responseMiddleware)

//delete routes
// userRoute.delete('/bank/remove', verifyUserToken, multer().array(), bankValiation.bankIdValidator,bankController.removeBank, responseMiddleware)
// userRoute.delete('/institute/person/remove', verifyInstituteToken, multer().array(), userValidation.deleteUserValidator, userController.deleteUser, responseMiddleware)


export default userRoute