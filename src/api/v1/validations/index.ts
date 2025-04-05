import validator from 'node-input-validator';
import responseMiddleware from '../middlewares/response.middleware.js';
import { catchException, getErrorMessage } from '../utils/helpers/functions.js';
import mongoose from 'mongoose';
import models from '../models/index.js'; // loading all models to use DB check validations here such as unique, etc.
import { EMP_TYPES } from '../utils/constants/common.constant.js';
import { Request, Response, NextFunction } from 'express';
import { getUser } from '../services/user.mongo.service.js';

interface ValidationArgs {
    value: string;
    args: string[];
}

validator.extend("unique", async function ({ value, args }: ValidationArgs): Promise<boolean> {
    console.log("ValidatorsIndex => unique", args);
    try {
        let result: boolean | null, condition: any = {};
        const [table, column, excludeColumn, excludeValue] = args
        condition[column] = value;
        // Apply extra filter in condition matched
        if (excludeColumn && excludeValue !== undefined) {// e.g: email update condition
            if(excludeColumn === 'self') {
                const user = await mongoose.model(table).findOne({[column]: value})
            }
            condition[excludeColumn] = { $ne: excludeValue === 'self' ? value : excludeValue }; 
        }
        result = await mongoose.model(table).findOne(condition);
        return (!result) ? true : false;
    } catch (error: unknown) {
        catchException(error);
        return false;
    }
})


/**
 * to check given id exists in given table
 * additional column checks can be passed in pairs
 * e.g exists:table_name,primary_id,col1,value1,col2,value2 and so on
 * col-value must be in pairs
 */
validator.extend("idExists", async function ({ value, args }: ValidationArgs): Promise<boolean> {
    console.log("ValidatorsIndex => idExists", value, args)
    try {
        const [table_name] = args
        const alreadyExists = await mongoose.model(table_name).findOne({ _id: value })
        return (alreadyExists) ? true : false
    } catch (err: unknown) {
        catchException(err)
        return false
    }
})

validator.extend("allowedValues", ({ value, args }: ValidationArgs): boolean => {
    return args.indexOf(value) > -1 ? true : false
})

const id_exists: string = "required|string|minLength:24|maxLength:24|idExists"

// Common function to send validation response
const validate = async (v: any, res: Response, next: NextFunction, req: Request): Promise<void> => {
    console.log("ValidatorsIndex => validate")
    const matched: any = await v.check();
    // console.log(matched)
    if (!matched) {
        console.log('validate in');
        req.body.code = 0;
        req.body.statusCode = 400; //set bad request
        req.body.status = false; //set false request
        req.body.message = getErrorMessage(req, v.errors); //set error message
        responseMiddleware(req, res);
    } else {
        console.log('validate out');
        next();
    }
};



const validations = {
    general: {
        requiredNumeric: "required|numeric",
        required: "required",
        nullable: "nullable",
        requiredInt: "required|integer",
        requiredString: "required|string|maxLength:255",
        nullableString: "nullable|string|maxLength:255",
        requiredText: "required|string|maxLength:5000",
        requiredTodayOrAfterDate: "required|dateAfterToday:today,.|date",
        requiredDate: "required|date",
        nullableDate: "nullable|date",
    },
    title: "required|string",
    token: "required|string",
    caseId: "required",
    assignId: "required",
    bankId: "required",
    description: "required|string",
    active: "required|in:true,false",
    userIdExists: `${id_exists}:users`,
    bankIdExists: `${id_exists}:users`,//role bank
    caseIdExists: `${id_exists}:cases`,
    templateIdExists: `${id_exists}:templates`,
    otpCode: "required|string|maxLength:6",
    countryCode: "required|string|maxLength:20",
    mobile: "required|string|maxLength:15|minLength:8",
    nullablemobile: "string|maxLength:15|minLength:8",
    name: "required|string|maxLength:50|minLength:2",
    email: "required|email|maxLength:50",
    language: "required|string|in:en,hi",
    check_email: "string|email|maxLength:50",
    password: "required|string|minLength:6",
    new_password: "required|string|minLength:6",
    current_password: "required|string",
    gender: "required|string",
    device_type: "required|string",
    dob: "required|date",
    aniversary: "nullable|date",
    image: "nullable|string|maxLength:300",
    uniqueMobile: "required|string|unique:users,mobile|maxLength:15|minLength:8",
    existsMobile: "required|string|exists:users,mobile|maxLength:15|minLength:8",

    uniqueEmail: "required|email|unique:users,email|maxLength:50",
    uniqueSelfIgnoreEmail: "required|email|unique:users,email,email,self|maxLength:50",
    uniqueBankName: "required|unique:banks,name|maxLength:100|minLength:2",
    uniqueNullableEmail: "nullable|email|unique:users,email|maxLength:50",
    uniqueTemplateTitle: "required|string|unique:templates,title",
    existsEmail: "email|exists:users,email|maxLength:50",

    social: {
        email: "string",
        name: "string",
        facebookId: "string|maxLength:150",
        googleId: "string|maxLength:150",
        appleId: "string|maxLength:150",
    },
    album: {
        file: "required"
    },
    admin: {
        email: "required|email",
        password: "required|string",
        albumId: "required|integer",
        userId: "required|integer",
        status: "required|integer",
        about_us: "required|string",
        privacy_policy: "required|string",
        term_and_conditions: "required|string",
        FAQs: "required|string"
    },
    excelFile: "mime:xlsx",
    assetDetails: "required",
    loanDetails: "required",
    personalDetails: "required",
    adminDetails: "required",
    optEmpType: `in:${EMP_TYPES}`
}

const uniqueWithIgnore = async (schema: any, id: string, col: string, val: string, req: Request, res: Response): Promise<boolean> => {
    try {
        if (!!val) {
            const result = await mongoose.model(schema).findOne({ col: val, '_id': { $ne: id } });
            if (result) {
                // req.code = 0
                req.body.statusCode = 400 // Set bad request
                req.body.status = false // Set false request
                req.body.message = `${col} is already exists!` // Set error message
                return false
                // responseMiddleware(req, res);
            }
        }
        return true
    } catch (err: unknown) {
        catchException(err)
        return true
    }
}

export {
    validate,
    validations,
    uniqueWithIgnore
}
