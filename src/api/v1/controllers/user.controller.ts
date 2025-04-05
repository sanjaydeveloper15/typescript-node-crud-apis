import { Request, Response, NextFunction } from 'express';
import { createAdmin, getAllAdmins, updateAdminUser, removeUser } from '../services/user.mongo.service.js';
import { setCustomResponse, mailOptions, objectFilter } from '../utils/helpers/functions.js';
import { CODE, ERROR_RESP, ERROR_TYPES, STATUS_CODES, SUCCESS_RESP } from '../utils/constants/common.constant.js';
// import mailService from '../services/mailService.js';
// // Note: Admin or Clients are same!


const addAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log('invoked addAdmin')
        const user = await createAdmin(req);
        if (user.okay) {
            const context = {
                name: req.body.name,
                password: user.password
            }
            setCustomResponse(req, STATUS_CODES.CREATED, SUCCESS_RESP, CODE.OKAY, user.data, user.message)
        }
    } catch (err: any) {
        console.error('catch addAdmin', { errName: err.name })
        setCustomResponse(req, ERROR_TYPES.VALIDATION_ERROR === err.name ? 400 : 500, ERROR_RESP, CODE.NOT_OKAY, {}, err.message)
    } finally {
        console.info('invoked finally addAdmin')
        next();
    }
};

const updateAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await updateAdminUser(req);
        (user.okay) ? setCustomResponse(req, 200, SUCCESS_RESP, CODE.OKAY, user.data, user.message) : setCustomResponse(req, 400, ERROR_RESP, CODE.NOT_OKAY, {}, user.message);
        next();
    } catch (err: any) {
        setCustomResponse(req, 500, ERROR_RESP, CODE.NOT_OKAY, {}, err.message)
        next();
    }
};

const getAdminsList = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const list: any = await getAllAdmins(req);
        setCustomResponse(req, 200, SUCCESS_RESP, CODE.OKAY, list, 'success', list.length);
        next();
    } catch (err: any) {
        setCustomResponse(req, 500, ERROR_RESP, CODE.NOT_OKAY, {}, err.message)
        next();
    }
}

// userController.addEmployee = async (req, res, next) => {
//     try {
//         const user = await userService.createEmployee(req);
//         if(user.okay){
//             let context = {
//                 name: req.body.name,
//                 password: user.password
//             }
//             await mailService(mailOptions(req.body.email, `Signed Up with LegalOps`, 'sendPassMailTemp', context))
//             setCustomResponse(req, 201, true, 0, user.data, user.message)
//         }else{
//             setCustomResponse(req, 400, false, 1, '', user.message)
//         }
//         next();
//     } catch (err) {
//         setCustomResponse(req,500,false,1,'',err.message)
//         next();
//     }
// };

// userController.updateEmp = async (req, res, next) => {
//     try {
//         const user = await userService.updateEmp(req);
//         (user.okay) ? setCustomResponse(req, 200, true, 0, user.data, user.message) : setCustomResponse(req, 400, false, 1, '', user.message);
//         next();
//     } catch (err) {
//         setCustomResponse(req,500,false,1,'',err.message)
//         next();
//     }
// };

// userController.getEmployeesList = async (req, res, next) => {
//     try {
//         const list = await userService.getAllEmployess(req);
//         setCustomResponse(req, 200, true, 0, list, 'success');
//         next();
//     } catch (err) {
//         setCustomResponse(req,500,false,1,'',err.message)
//         next();
//     }
// }

// userController.addInstitue = async (req, res, next) => {
//     try {
//         const user = await userService.createInstitute(req);
//         if(user.okay){
//             let context = {
//                 name: req.body.name,
//                 password: user.password
//             }
//             await mailService(mailOptions(req.body.email, `Signed Up with LegalOps`, 'sendPassMailTemp', context))
//             setCustomResponse(req, 201, true, 0, user.data, user.message)
//         }else{
//             setCustomResponse(req, 400, false, 1, '', user.message)
//         }
//         next();
//     } catch (err) {
//         setCustomResponse(req,500,false,1,'',err.message)
//         next();
//     }
// }

// userController.getInstitutesList = async (req, res, next) => {
//     try {
//         const list = await userService.getAllInstitutes(req);
//         setCustomResponse(req, 200, true, 0, list, 'success');
//         next();
//     } catch (err) {
//         setCustomResponse(req,500,false,1,'',err.message)
//         next();
//     }
// }

// userController.updateInstitute = async (req, res, next) => {
//     try {
//         const user = await userService.updateInstitute(req);
//         (user.okay) ? setCustomResponse(req, 200, true, 0, user.data, user.message) : setCustomResponse(req, 400, false, 1, '', user.message);
//         next();
//     } catch (err) {
//         setCustomResponse(req,500,false,1,'',err.message)
//         next();
//     }
// };

// userController.addInstituePerson = async (req, res, next) => {
//     try {
//         const user = await userService.createInstitutePerson(req);
//         if(user.okay){
//             let context = {
//                 name: req.body.name,
//                 password: user.password
//             }
//             await mailService(mailOptions(req.body.email, `Signed Up with LegalOps`, 'sendPassMailTemp', context))
//             setCustomResponse(req, 201, true, 0, user.data, user.message)
//         }else{
//             setCustomResponse(req, 400, false, 1, '', user.message)
//         }
//         next();
//     } catch (err) {
//         setCustomResponse(req,500,false,1,'',err.message)
//         next();
//     }
// }

// userController.getInstitutePersonsList = async (req, res, next) => {
//     try {
//         const list = await userService.getAllInstitutePersons(req);
//         setCustomResponse(req, 200, true, 0, list, 'success');
//         next();
//     } catch (err) {
//         setCustomResponse(req,500,false,1,'',err.message)
//         next();
//     }
// }

// userController.updateInstitutePerson = async (req, res, next) => {
//     try {
//         const user = await userService.updateInstitutePerson(req);
//         (user.okay) ? setCustomResponse(req, 200, true, 0, user.data, user.message) : setCustomResponse(req, 400, false, 1, '', user.message);
//         next();
//     } catch (err) {
//         setCustomResponse(req,500,false,1,'',err.message)
//         next();
//     }
// };

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await removeUser(req.body.id);
        (user.okay) ? setCustomResponse(req, 200, SUCCESS_RESP, CODE.OKAY, user.data, user.message) : setCustomResponse(req, 400, ERROR_RESP, CODE.NOT_OKAY, {}, user.message);
        next();
    } catch (err: any) {
        setCustomResponse(req, 500, ERROR_RESP, CODE.NOT_OKAY, {}, err.message)
        next();
    }
}

const userController = {
    addAdmin,
    getAdminsList,
    updateAdmin,
    deleteUser
}

export default userController;
