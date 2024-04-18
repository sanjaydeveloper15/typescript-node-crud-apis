// import messages from '../helpers/messages.js';

const responseMiddleware = (req: object, res: object, customMsg: string, statusCode: number) => {
    //console.log("responseMiddleware => exports", `message => ${req.message}`)
    // let lang = req.lang,
    // data = req.data ? req.data : {},
    // message = req.message ? messages(lang)[req.message] : customMsg ? customMsg : "error in message",
    // totalCount = req.totalCount ? req.totalCount : 0,
    // status = req.status ? req.status : false;
    // statusCode = statusCode ? statusCode : req.statusCode ? req.statusCode : 200;

    // if(message == '' || message === null || message === undefined){
    //     message = req.message
    // }
    // return res.status(statusCode).send({ status, message, data, totalCount })
}

export default responseMiddleware;

