import { catchException, getReqLang } from '../utils/helpers/functions.js';
import messages from '../utils/helpers/messages.js';
import { Request, Response } from 'express';

const responseMiddleware = (req: Request, res: Response): Response => {
    try {
        console.log('invoked responseMiddleware')

        // Helper function
        const getVal: any = (v: any) => {
            return req.params[v] || req.query[v] || req.body[v];
        }

        const statusCode: number = getVal('statusCode') ? Number(getVal('statusCode')) : 200;
        const lang: string = getReqLang(req)
        const data: object = getVal('data') ? getVal('data') : {};
        const totalCount: Number = getVal('totalCount') ? Number(getVal('totalCount')) : 0;
        const status: boolean = getVal('status') ? !!getVal('status') : false;
        const customMsg: string = getVal('customMsg') ? getVal('customMsg') : false; // without lang change

        let message = getVal('message') ? messages(lang)[getVal('message')] : customMsg ? customMsg : "Message not found";

        if (!message) {
            message = getVal('message') || "Invalid message";
        }

        return res.status(statusCode).send({ status, message, data, totalCount })
    } catch (error: unknown) {
        catchException(error)
        const errorMessage = (error instanceof Error) ? error.message : 'An unknown error occurred';
        return res.status(500).send({ status: false, message: errorMessage, data: {}, totalCount: 0 })
    }
}



export default responseMiddleware;

