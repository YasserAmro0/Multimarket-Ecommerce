import { Response, NextFunction } from 'express';
import { templateErrors, verifyToken } from '../helpers';

import { Decode, RequestWithUserRole,  } from '../types';

const checkAuth = () => async (
    req: RequestWithUserRole,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { token } = req;
        if (token) {
            const decoded = await verifyToken(token) as Decode;
            req.user = decoded;
            next();
        } else {
            throw templateErrors.UNAUTHORIZED('Unauthorized');
        }
    } catch (error) {
        next(templateErrors.UNAUTHORIZED('Unauthorized'));
    }
};
const checkToken = async (
    req: RequestWithUserRole,
    res: Response,
    next: NextFunction,
) => {
    try {
        const { token } = req;
        if (token) {
            const decoded = await verifyToken(token) as Decode;
            req.user = decoded;
            next();
        } else {
            throw templateErrors.UNAUTHORIZED('Unauthorized');
        }
    } catch (error) {
        next(templateErrors.UNAUTHORIZED('Unauthorized'));
    }
};

export { checkAuth, checkToken };