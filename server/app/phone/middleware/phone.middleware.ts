import {errorMessage} from '../../../lib/Helper';
import {NextFunction, Request, Response} from 'express';

export const phoneMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const {phone} = req.body;

    if (!phone) { // check request has phone
        errorMessage(res, 'Phone is required!')
    }

    const phoneFormat1 = phone.substring(0, 4) !== '+639' && phone.length >= 13;
    const phoneFormat2 = phone.substring(0, 3) !== '639' && phone.length === 12;
    const phoneFormat3 = phone.substring(0, 2) !== '09' && phone.length === 11;
    const phoneFormat4 = phone.length < 11;

    if (phoneFormat1 || phoneFormat2 || phoneFormat3 || phoneFormat4) {
        return errorMessage(res, 'Phone number must be a valid format')
    }

    if (phone.substring(0, 2) !== '09') {
        req.body.phone = '09' + phone.substring(phone.length - 9)
    }

    next()

}



