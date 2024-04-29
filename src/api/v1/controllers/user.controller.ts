import { Request, Response, NextFunction } from 'express';
import { createAdmin, getUser } from '../services/user.mongo.service.js';
import { setCustomResponse, mailOptions, objectFilter } from '../utils/helpers/functions.js';
// import mailService from '../services/mailService.js';
// // Note: Admin or Clients are same!


const addAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await createAdmin(req);
        if(user.okay){
            const context = {
                name: req.body.name,
                password: user.password
            }
            setCustomResponse(req, 201, true, 0, user.data, user.message)
        }else{
            setCustomResponse(req, 400, false, 1, '', user.message)
        }
        next();
    } catch (err:any) {
        setCustomResponse(req,500,false,1,'',err.message)
        next();
    }
};

// userController.updateAdmin = async (req, res, next) => {
//     try {
//         const user = await userService.updateAdmin(req);
//         (user.okay) ? setCustomResponse(req, 200, true, 0, user.data, user.message) : setCustomResponse(req, 400, false, 1, '', user.message);
//         next();
//     } catch (err) {
//         setCustomResponse(req,500,false,1,'',err.message)
//         next();
//     }
// };

// userController.getAdminsList = async (req, res, next) => {
//     try {
//         const list = await userService.getAllAdmins(req);
//         setCustomResponse(req, 200, true, 0, list, 'success');
//         next();
//     } catch (err) {
//         setCustomResponse(req,500,false,1,'',err.message)
//         next();
//     }
// }

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

// userController.deleteUser = async (req, res, next) => {
//     try {
//         const user = await userService.deleteUser(req.body.id);
//         (user.okay) ? setCustomResponse(req, 200, true, 0, user.data, user.message) : setCustomResponse(req, 400, false, 1, '', user.message);
//         next();
//     } catch (err) {
//         setCustomResponse(req,500,false,1,'',err.message)
//         next();
//     }
// }

const userController = {
    addAdmin
}

export default userController;
