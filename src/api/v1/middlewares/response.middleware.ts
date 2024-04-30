import messages from '../utils/helpers/messages.js';
import { Request, Response } from 'express';

const responseMiddleware = (req: Request, res: Response) => {
    let customMsg = '';
    const getVal: any = (v: any) => {
        return req.params[v] || req.query[v] || req.body[v];
    }
    let statusCode = getVal('statusCode') ? getVal('statusCode') : 200;
    // console.log(req)
    //console.log("responseMiddleware => exports", `message => ${req.message}`)
    let lang = getVal('lang'),
        data = getVal('data') ? getVal('data') : {},
        message = getVal('message') ? messages(lang)[getVal('message')] : customMsg ? customMsg : "error in message",
        totalCount = getVal('totalCount') ? getVal('totalCount') : 0,
        status = getVal('status') ? getVal('status') : false;
    statusCode = statusCode ? statusCode : getVal('statusCode') ? getVal('statusCode') : 200;

    if (message == '' || message === null || message === undefined) {
        message = req.body.message || req.query.message
    }
    return res.status(statusCode).send({ status, message, data, totalCount })
}



export default responseMiddleware;

