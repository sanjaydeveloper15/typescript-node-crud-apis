import { Request } from 'express';
import bcrypt from 'bcryptjs';
import generator from 'generate-password';
import messages from './messages.js';
import dotenv from 'dotenv'
dotenv.config() //for calling process.env.VAR_NAME globally
interface MailServiceConfig {
    service: string;
    host: string;
    port: number;
    auth: {
        user: string;
        pass: string;
    };
}

interface MailAttachments {
    filename: string,
    content: Record<string, any> // for json data, key is STRING always and second for buffer
}

interface MailOptions {
    from: string;
    to: string;
    subject: string;
    template: string;
    context: any;
    attachments?: MailAttachments[];
}

const generateOtp = (): number => { //6 digit otp
    return Math.floor(100000 + Math.random() * 900000)
}

const generatePassword = async (length: number): Promise<string> => {
    return generator.generate({
        length: length,
        numbers: true,
        uppercase: true
    });
}

const hashPassword = async (password: string): Promise<string> => {
    try {
        if (password) {
            const salt = await bcrypt.genSalt()
            return await bcrypt.hash(password, salt)
        }
        return ""
    } catch (err: unknown) {
        catchException(err)
        return ""
    }
}

const getErrorMessage = (req: Request, errors: any): string => {
    try {
        // console.log(errors)
        req.body.language = getReqLang(req)
        for (let key in errors) {
            let rule = errors[key]['rule'],
                exists = messages()[rule]
            return (exists) ? messages()[rule](key)[req.body.language] : errors[key]['message']
        }
        return ""
    } catch (err: unknown) {
        catchException(err)
        return ""
    }
}

const convertDynamicVarLang = (lang: string, varr: string): string => {
    if (varr === 'password') {
        if (lang == 'en') return varr
        if (lang == 'hi') return 'पासवर्ड'
    }
    return varr
}

const setCustomResponse = (req: Request, statusCode: number = 200, status: boolean = false, code: number = 1, data: any = null, msg: string = '', totalCount: number = 0): void => {
    console.log(`custom resp msg => ${msg}, statusCode => ${statusCode}`)
    req.body.status = status
    req.body.data = (!!data) ? data : {}
    req.body.totalCount = totalCount
    req.body.message = msg
    req.body.statusCode = statusCode
    req.body.lang = getReqLang(req)
}

const checkPassword = async (password: string, hash: string): Promise<boolean> => {
    try {
        return await bcrypt.compare(password, hash) // gives boolean response always
    } catch (err) {
        console.log('checkPassword', err)
        return false
    }
}

const getReqToken = (req: Request): string => {
    try {
        return (req.query.token || req.body.token || req.headers['x-access-token'] || req.headers['authorization'] || '').toString();
    } catch (err) {
        return '';
    }
}

const getReqLang = (req: Request): string => {
    const DEFAULT_LANG: string = 'en';
    try {
        return (req.query.language || req.body.language || req.headers['accept-language'] || DEFAULT_LANG).toString();
    } catch (err) {
        return DEFAULT_LANG;
    }
}

const mailOptions = (toEmail: string, mailSubject: string, templateFile: string, jsonData: any, filename: string): MailOptions => {
    const obj: any = {
        from: '"TS Node" <no-reply@legalops.com>', // sender address
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

const mailServiceObj = (): MailServiceConfig => {
    const DEFAULT_VALUE = 'default-value' as const;
    const DEFAULT_PORT = 587; // Common default SMTP port

    return {
        service: process.env.MAIL_SERVICE || DEFAULT_VALUE,
        host: process.env.MAIL_HOST || DEFAULT_VALUE,
        port: Number(process.env.MAIL_PORT) || DEFAULT_PORT,
        auth: {
            user: process.env.MAIL_APP_EMAIL || DEFAULT_VALUE,
            pass: process.env.MAIL_APP_PASS || DEFAULT_VALUE
        }
    }
}

const objectFilter = (obj: { [key: string]: any }): { [key: string]: any } => {
    Object.keys(obj).forEach(key => {
        if (obj[key] === '') {
            delete obj[key];
        }
    });
    return obj;
}

const shouldNotEmpty = (val: string): boolean => {
    return (val != '' && val != null && val != undefined) ? true : false;
}

const catchException = (error: unknown): void => {
    if (error instanceof Error) {
        console.error("Error:", error.message);
        console.error("Stack trace:", error.stack);
    } else {
        console.error("An unknown error occurred:", error);
    }
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
    shouldNotEmpty,
    catchException
}