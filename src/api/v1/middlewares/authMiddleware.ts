import jwt from 'jsonwebtoken';
// import { getReqToken, getReqLang } from '../helpers/functions.js';
// import messages from '../helpers/messages.js';
import responseMiddleware from './responseMiddleware.js';
// import { ROLE } from '../utils/constants.js';

// const createUserToken = async(id,email,role) => {
//     try{
//         let obj = {"id":id, "email": email, "role": role}; //console.log(obj);
//         const token = jwt.sign(obj, process.env.JWT_TOKEN_KEY, {
//             expiresIn: process.env.JWT_TOKEN_EXP
//         })
//         return token
//     }catch(err){
//         return ''
//     }
// }

// const verifyUserToken = (req, res, next) => {
//     try{
//         let token = getReqToken(req);
//         if(!token) return responseMiddleware(req,res,messages('en')['token_required'],401);
//         const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY) //console.log(decoded)
//         req.user = decoded
//         next()
//     }catch(err){
//         //console.log(err);
//         return responseMiddleware(req,res,'User token is invalid.',401)
//     }
// }

// const verifySuperAdminToken = (req, res, next) => {
//     try{
//         let token = getReqToken(req); //console.log(123,token);
//         if(!token) return responseMiddleware(req,res,messages('en')['token_required'],401);
//         const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY); console.log(decoded);
//         if(ROLE.SUPER_ADMIN != decoded.role) return responseMiddleware(req,res,messages('en')['unauthorized'],403);
//         req.user = decoded
//         next()
//     }catch(err){
//         //console.log(err);
//         return responseMiddleware(req,res,'User token is invalid.',401)
//     }
// }

// const verifyInstituteToken = (req, res, next) => {
//     try{
//         let token = getReqToken(req); //console.log(123,token);
//         if(!token) return responseMiddleware(req,res,messages('en')['token_required'],401);
//         const decoded = jwt.verify(token, process.env.JWT_TOKEN_KEY); console.log(decoded);
//         if(decoded.role === ROLE.SUPER_ADMIN){
//             req.user = decoded
//             next()
//         }else{
//             if(ROLE.INSTITUTE != decoded.role) return responseMiddleware(req,res,messages('en')['unauthorized'],403);
//             req.user = decoded
//             next()
//         }
//     }catch(err){
//         //console.log(err);
//         return responseMiddleware(req,res,'User token is invalid.',401)
//     }
// }

// const verifyApiKey = (req, res, next) => {
//     try{
//         let lang = getReqLang(req)
//         //console.log(process.env.X_API_KEY, req.headers['x-api-key'])
//         if(req.headers['x-api-key'] === process.env.X_API_KEY){
//             next()
//         }else{
//             return responseMiddleware(req,res,messages('en')['invalid_api_key'],401)
//         }
//     }catch(err){
//         //console.log(err);
//         return responseMiddleware(req,res,'User token is invalid.',401)
//     }   
// }

export { 
    // createUserToken,
    // verifyUserToken,
    // verifySuperAdminToken,
    // verifyApiKey,
    // verifyInstituteToken 
}