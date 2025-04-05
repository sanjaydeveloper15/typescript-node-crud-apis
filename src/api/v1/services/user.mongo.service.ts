import { Request } from 'express';
import userModel from '../models/user.model.js';
import { hashPassword, objectFilter, generatePassword, catchException } from '../utils/helpers/functions.js';
import messages from '../utils/helpers/messages.js';
import { createUserToken } from '../middlewares/auth.middleware.js';
import { ROLE } from '../utils/constants/common.constant.js';
import { Document } from 'mongodb';

interface BaseUser {
    _id?: string;
    name: string;
    email: string;
    password: string;
    role: string;
    countryCode: string;
    mobile: string;
    employeeType?: string;
    employeeQualification?: string;
    address?: string;
    createdAt?: Date;
    profileImage?: string;
}

interface UserResp {
    okay: boolean;
    message: string;
    data: any;
    password?: string;
}

const commonSelect: Partial<Record<keyof BaseUser, number>> = { _id: 1, name: 1, email: 1, countryCode: 1, mobile: 1, profileImage: 1, role: 1, employeeType: 1, employeeQualification: 1, address: 1, createdAt: 1 };

// const imgPath = "/assets/uploads/images/";

// const getAllUsers = async() => {
// 	return await userModel.find();
// }

interface AdminWhere extends BaseUser {
    employeeType?: any
}

const getAllAdmins = async (req: Request): Promise<Document> => {
    try {
        const { employeeType } = req.query
        const condition: Partial<AdminWhere> = employeeType ? { role: ROLE.ADMIN, employeeType: employeeType } : { role: ROLE.ADMIN };
        return await userModel.find(condition).select(commonSelect);
    } catch (err: unknown) {
        catchException(err)
        throw new Error("Error in service > getAllAdmins");
    }
}

const getUser = async (id: string, token: string = ''): Promise<Document> => {
    try {
        const user: any = await userModel.findOne({ _id: id }).select({
            _id: 1, name: 1, email: 1, countryCode: 1, mobile: 1, profileImage: 1, role: 1, employeeType: 1, employeeQualification: 1, address: 1, createdAt: 1
        }).lean(); // returns a plan JS object
        if (user && !!token) user.token = token;
        return user;
    } catch (err: unknown) {
        catchException(err)
        throw new Error("Error in service > getUser");
    }
}
interface NewUserObject extends BaseUser {
    password: string;
}

const createAdmin = async (req: Request): Promise<UserResp> => {
    try {
        const password = await generatePassword(10); // generate random password first time, then user will reset themselves

        const prepareObject: NewUserObject = {
            password: await hashPassword(password),
            email: req.body.email,
            name: req.body.name,
            role: ROLE.ADMIN,
            countryCode: req.body.countryCode,
            mobile: req.body.mobile,
            employeeType: req.body.employeeType
        };
        let user = await userModel.create(prepareObject);

        const token: string = await createUserToken(user.id, user.email, ROLE.ADMIN);
        return {
            data: await getUser(user.id, token),
            okay: true,
            message: messages('en')['signup'],
            password: password
        }
    } catch (err: unknown) {
        catchException(err)
        throw new Error("Error in service > createAdmin");
    }
};

const updateAdminUser = async (req: Request): Promise<UserResp> => {
    try {
        const prepareObject: Partial<BaseUser> = {
            email: req.body.email,
            name: req.body.name,
            role: ROLE.ADMIN,
            countryCode: req.body.countryCode,
            mobile: req.body.mobile
        };
        const updateResp = await userModel.findOneAndUpdate({ "_id": req.body.userId }, objectFilter(prepareObject))
        return {
            data: updateResp ? await getUser(req.body.userId) : {},
            okay: updateResp ? true : false,
            message: updateResp ? messages('en')['user_updated'] : messages('en')['user_not_found']
        }
    } catch (err: unknown) {
        catchException(err)
        throw new Error("Error in service > updateAdminUser");
    }
};

const removeUser = async (userId: string): Promise<UserResp> => {
    try {
        const deleteUsr = await userModel.deleteOne({ '_id': userId });
        
        return {
            data: {},
            okay: deleteUsr.deletedCount ? true : false,
            message: deleteUsr.deletedCount ? messages('en')['user_deleted'] : messages('en')['user_not_found']
        }
    } catch (err: unknown) {
        catchException(err)
        throw new Error("Error in service > removeUser");
    }
}

// const getAllEmployess = async(req) => {
//     let condition = (req.query.adminId) ? {'role':ROLE.EMPLOYEE, 'adminId':req.query.adminId} : {'role':ROLE.EMPLOYEE}; 
// 	if(req.query.filterByParent == 1){
//         let parentId = await getParentId(req.user.id);
//         condition.adminId = parentId;
//     }
//     return await userModel.find(condition).select(commonSelect);
// }

// const getAllInstitutes = async(req) => {
// 	let condition = (req.query.adminId) ? {'role':ROLE.INSTITUTE, 'adminId':req.query.adminId} : {'role':ROLE.INSTITUTE}; 
// 	if(req.query.filterByParent == 1){
//         let parentId = await getParentId(req.user.id);
//         condition.adminId = parentId;
//     }
//     return await userModel.find(condition).select(commonSelect);
// }

// const getAllInstitutePersons = async(req) => {
// 	let condition = (req.query.userId) ? {'role':ROLE.INSTITUTE_PERSON, 'userId':req.query.userId} : {'role':ROLE.INSTITUTE_PERSON}; 
// 	return await userModel.find(condition).select(commonSelect);
// }

// const createEmployee = async (req) => {
// 	let resultObj = {},
//         password = await generatePassword(10);

//     const prepareObject = {
//         password: await hashPassword(password),
//         email: req.body.email,
//         name: req.body.name,
//         role: ROLE.EMPLOYEE,
//         adminId: req.user.id,
//         parentId: req.user.id,
//         countryCode: req.body.countryCode,
//         mobile: req.body.mobile,
//         employeeType: req.body.employeeType,
// 		employeeQualification: req.body.employeeQualification,
//         profileImage: (req.file) ? imgPath + req.file.filename : ''
//     };
//     let user = await userModel.create(prepareObject);

//     let token = await createUserToken(user.id,user.email);
//     resultObj.data = await getUser(user.id,token);
//     resultObj.okay = true;
//     resultObj.message = messages('en')['signup'];
// 	resultObj.password = password;
// 	return resultObj;
// };

// const createInstitute = async (req) => {
// 	let resultObj = {},
//         password = await generatePassword(10);

//     const prepareObject = {
//         password: await hashPassword(password),
//         email: req.body.email,
//         name: req.body.name,
//         role: ROLE.INSTITUTE,
//         adminId: req.user.id,
//         parentId: req.user.id,
//         countryCode: req.body.countryCode,
//         mobile: req.body.mobile,
//         address: req.body.address,
//         profileImage: (req.file) ? imgPath + req.file.filename : ''
//     };
//     let user = await userModel.create(prepareObject);

//     let token = await createUserToken(user.id,user.email);
//     resultObj.data = await getUser(user.id,token);
//     resultObj.okay = true;
//     resultObj.message = messages('en')['signup'];
// 	resultObj.password = password;
// 	return resultObj;
// };

// const createInstitutePerson = async (req) => {
// 	let resultObj = {},
//         password = await generatePassword(10);

//     const prepareObject = {
//         password: await hashPassword(password),
//         email: req.body.email,
//         name: req.body.name,
//         role: ROLE.INSTITUTE_PERSON,
//         userId: req.user.id,
//         parentId: req.user.id,
//         countryCode: req.body.countryCode,
//         mobile: req.body.mobile,
//         address: req.body.address,
//         profileImage: (req.file) ? imgPath + req.file.filename : ''
//     };
//     let user = await userModel.create(prepareObject);

//     let token = await createUserToken(user.id,user.email);
//     resultObj.data = await getUser(user.id,token);
//     resultObj.okay = true;
//     resultObj.message = messages('en')['signup'];
// 	resultObj.password = password;
// 	return resultObj;
// };

// const updateEmp = async (req) => {
// 	let resultObj = {};

//     const prepareObject = {
//         email: req.body.email,
//         name: req.body.name,
//         role: ROLE.EMPLOYEE,
//         adminId: req.user.id,
//         countryCode: req.body.countryCode,
//         mobile: req.body.mobile,
//         employeeType: req.body.employeeType,
// 		employeeQualification: req.body.employeeQualification,
//         profileImage: (req.file) ? imgPath + req.file.filename : ''
//     };
//     await userModel.findOneAndUpdate({"_id":req.body.userId},objectFilter(prepareObject))

//     resultObj.data = await getUser(req.body.userId);
//     resultObj.okay = true;
//     resultObj.message = messages('en')['user_updated'];
// 	return resultObj;
// };

// const checkLogin = async(req) => {
// 	let resultObj = {};
// 	resultObj.okay = false;
// 	const user = await userModel.findOne({'email':req.body.email}).select('password');
// 	if(user){
// 		//console.log(user);
// 		let checkUserPassword = await checkPassword(req.body.password,user.password);
// 		if(checkUserPassword){
// 			let token = await createUserToken(user.id,user.email);
// 			resultObj.data = await getUser(user.id,token);
// 			resultObj.okay = true;
// 			resultObj.message = messages('en')['login_success'];
// 		}else{
// 			resultObj.message = messages('en')['incorrect_password'];
// 		}
// 	}else{
// 		resultObj.message = messages('en')['wrong_email'];		
// 	}
// 	//console.log(resultObj)
// 	return resultObj;
// }

// const checkEmail = async (email) => {
// 	const user = await userModel.findOne({'email':email})
// 	return user;
// }

// const updateInstitute = async (req) => {
// 	let resultObj = {};

//     const prepareObject = {
//         email: req.body.email,
//         name: req.body.name,
//         role: ROLE.INSTITUTE,
//         adminId: req.user.id,
//         countryCode: req.body.countryCode,
//         mobile: req.body.mobile,
//         address: req.body.address,
//         profileImage: (req.file) ? imgPath + req.file.filename : ''
//     };
//     await userModel.findOneAndUpdate({"_id":req.body.userId},objectFilter(prepareObject))

//     resultObj.data = await getUser(req.body.userId);
//     resultObj.okay = true;
//     resultObj.message = messages('en')['user_updated'];
// 	return resultObj;
// }

// const updateInstitutePerson = async (req) => {
// 	let resultObj = {};

//     const prepareObject = {
//         email: req.body.email,
//         name: req.body.name,
//         userId: req.user.id,
//         countryCode: req.body.countryCode,
//         mobile: req.body.mobile,
//         role: ROLE.INSTITUTE_PERSON,
//         address: req.body.address,
//         profileImage: (req.file) ? imgPath + req.file.filename : ''
//     };
//     await userModel.findOneAndUpdate({"_id":req.body.userId},objectFilter(prepareObject));

//     resultObj.data = await getUser(req.body.userId);
//     resultObj.okay = true;
//     resultObj.message = messages('en')['user_updated'];
// 	return resultObj;
// }

// const updatePassword = async (userId, password) => {
//     return await userModel.updateOne({'_id': userId},{'password': await hashPassword(password)});
// }

// const isBank = async (userId) => {
//     return await userModel.findOne({'role': ROLE.BANK, '_id': userId});
// }

// const getParentId = async (userId) => {
//     console.log('=> getParentId()',userId);
//     let user = await userModel.findOne({'_id': userId}).select({parentId: 1, role: 1});
//     console.log('userData',user);
//     return (user) ? user.parentId : null;
// }

export {
    createAdmin,
    getUser,
    getAllAdmins,
    updateAdminUser,
    removeUser
}