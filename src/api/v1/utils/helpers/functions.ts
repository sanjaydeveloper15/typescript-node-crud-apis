import { Request } from 'express';
import bcrypt from 'bcryptjs';
import generator from 'generate-password';
import messages from './messages.js';
import dotenv from 'dotenv'
dotenv.config() //for calling process.env.VAR_NAME globally

const generateOtp = () => { //6 digit otp
    return Math.floor(100000 + Math.random() * 900000)
}
const generatePassword = async (length:number) => {
    return generator.generate({
        length: length,
        numbers: true
    });
}
const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt()
    const hash = await bcrypt.hash(password, salt)
    return hash
}
const getErrorMessage = (req: Request, errors:any) => {
    try {
        // console.log(errors)
        if (req.body.language === '' || req.body.language === undefined) req.body.language = 'en'
        //console.log(req.body.lang)
        for (var key in errors) {
            let rule = errors[key]['rule'],
                exists = messages()[rule]
            return (exists) ? messages()[rule](key)[req.body.language] : errors[key]['message']
        }
    } catch (err:any) {
        return `Something went wrong! ${err.message}`
    }
}
const convertDynamicVarLang = (lang: string, varr: string) => {
    if (varr == 'password') {
        if (lang == 'en') return varr
        if (lang == 'hi') return 'पासवर्ड'
    }
    return varr
}
const setCustomResponse = (req: Request, statusCode = 200, status = false, code = 1, data = '', msg = '', totalCount = 0) => {
    console.log(`custom resp msg => ${msg}`)
    req.body.status = status
    req.body.data = (data != '') ? data : {}
    req.body.totalCount = totalCount
    req.body.message = msg
    req.statusCode = statusCode
    req.body.lang = req.body.language
}
const checkPassword = async (password: string, hash: string) => {
    let result = await bcrypt.compare(password, hash)
    return result
}
const getReqToken = (req: Request) => {
    return req.query.token || req.body.token || req.headers['x-access-token'] || req.headers['authorization'];
}
const getReqLang = (req: Request) => {
    return req.query.language || req.body.language || req.headers['accept-language'];
}
const mailOptions = (toEmail: string, mailSubject: string, templateFile: string, jsonData: any, filename: string) => {
    let obj:any = {
        from: '"LegalOps" <no-reply@legalops.com>', // sender address
        to: toEmail, // list of receivers
        subject: mailSubject,
        template: templateFile, // the name of the template file i.e email.handlebars
        context: jsonData, //passing for template variables dynamically
    }
    if (filename != '') {
        obj.attachments = [{
            filename: filename,
            content: jsonData.bufferContent
        }]
    }
    return obj;
}
const mailServiceObj = async () => {
    return {
        service: process.env.MAIL_SERVICE,
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
            user: process.env.MAIL_APP_EMAIL,
            pass: process.env.MAIL_APP_PASS
        }
    }
}

const objectFilter = async (obj:any) => {
    Object.keys(obj).forEach(key => {
        if (obj[key] === '') {
            delete obj[key];
        }
    });
    return obj;
}

const shouldNotEmpty = async (val:string) => {
    return (val != '' && val != null && val != undefined) ? true : false;
}

export {
    generateOtp,
    generatePassword,
    hashPassword,
    getErrorMessage,
    convertDynamicVarLang,
    setCustomResponse,
    checkPassword,
    getReqToken,
    getReqLang,
    mailOptions,
    mailServiceObj,
    objectFilter,
    shouldNotEmpty
}