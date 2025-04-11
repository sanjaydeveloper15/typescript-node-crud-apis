import { Request, Response, NextFunction } from 'express';
import { createAdmin, getAllAdmins, updateAdminUser, removeUser } from '../services/user.mongo.service.js';
import { setCustomResponse, catchException, getCatchErrorMsg } from '../utils/helpers/functions.js';
import { CODE, ERROR_RESP, ERROR_TYPES, SERVICE_TYPE, STATUS_CODES, SUCCESS_RESP } from '../utils/constants/common.constant.js';
import WinstonLogger from '../logger/winston.js';
const Logger = new WinstonLogger()
// import mailService from '../services/mailService.js';
// // Note: Admin or Clients are same!


const addAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        Logger.info(SERVICE_TYPE.PUSH, `addAdmin invoked`, req.body)
        const user = await createAdmin(req);
        if (user.okay) {
            const context = {
                name: req.body.name,
                password: user.password
            }
            setCustomResponse(req, STATUS_CODES.CREATED, SUCCESS_RESP, CODE.OKAY, user.data, user.message)
        }
    } catch (err: unknown) {
        const ErrorName = err instanceof Error ? err.name : 'no-error-name';
        catchException(err)
        setCustomResponse(req, ERROR_TYPES.VALIDATION_ERROR === ErrorName ? STATUS_CODES.BAD_REQUEST : STATUS_CODES.INTERNAL_SERVER_ERROR, ERROR_RESP, CODE.NOT_OKAY, {}, getCatchErrorMsg(err))
    } finally {
        next();
    }
};

const updateAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const user = await updateAdminUser(req);
        (user.okay) ? setCustomResponse(req, STATUS_CODES.SUCCESS, SUCCESS_RESP, CODE.OKAY, user.data, user.message) : setCustomResponse(req, 400, ERROR_RESP, CODE.NOT_OKAY, {}, user.message);
        next();
    } catch (err: unknown) {
        setCustomResponse(req, STATUS_CODES.INTERNAL_SERVER_ERROR, ERROR_RESP, CODE.NOT_OKAY, {}, getCatchErrorMsg(err))
        next();
    }
};

const getAdminsList = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const list: any = await getAllAdmins(req);
        setCustomResponse(req, STATUS_CODES.SUCCESS, SUCCESS_RESP, CODE.OKAY, list, 'success', list.length);
        next();
    } catch (err: unknown) {
        setCustomResponse(req, STATUS_CODES.INTERNAL_SERVER_ERROR, ERROR_RESP, CODE.NOT_OKAY, {}, getCatchErrorMsg(err))
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

const deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const user = await removeUser(req.body.id);
        user.okay ? setCustomResponse(req, STATUS_CODES.NO_CONTENT, SUCCESS_RESP, CODE.OKAY, user.data, user.message) : setCustomResponse(req, 400, ERROR_RESP, CODE.NOT_OKAY, {}, user.message);
        next();
    } catch (err: unknown) {
        setCustomResponse(req, STATUS_CODES.INTERNAL_SERVER_ERROR, ERROR_RESP, CODE.NOT_OKAY, {}, getCatchErrorMsg(err))
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
