import { Validator } from 'node-input-validator';
import { Request, Response, NextFunction } from 'express'
import { validate, validations, uniqueWithIgnore } from './index.js';

const signupValidator = async (req:Request, res:Response, next: NextFunction) => {
console.log(req.body)
    const v = new Validator(req.body, {
        name: validations.name,
        email: validations.uniqueEmail,
        countryCode: validations.countryCode,
        mobile: validations.mobile
    })

    await validate(v, res, next, req)
}

const updateValidator = async (req: Request, res: Response, next: NextFunction) => {
    // let checkOkay = uniqueWithIgnore('users',req.body.userId,'email',req.body.email,req,res);
    // if(checkOkay){
        const v = new Validator(req.body, {
            userId: validations.userIdExists,
            name: validations.name,
            email: validations.email,
            countryCode: validations.countryCode,
            mobile: validations.mobile
        })
        validate(v, res, next, req)
    //}
}

// const loginValidator = async (req, res, next) => {

//     const v = new Validator(req.body, {
//         email: validations.email,
//         password: validations.password
//     })

//     validate(v, res, next, req)
// }

// const forgotPassValidator = async (req, res, next) => {

//     const v = new Validator(req.body, {
//         email: validations.email
//     })

//     validate(v, res, next, req)
// }

// const getAdminsValidator = async (req, res, next) => {
//     const v = new Validator(req.query, {
//         employeeType: validations.optEmpType
//     })

//     validate(v, res, next, req)
// }

// const deleteUserValidator = async (req, res, next) => {
//     const v = new Validator(req.body, {
//         id: validations.userIdExists
//     })

//     validate(v, res, next, req)
// }

const userValidation = { 
    signupValidator,
    updateValidator
};

export default userValidation;