import { Request } from 'express';

interface Decode {
    adminId?: string;
    userId?: string;
}
interface RequestWithUserRole extends Request {
    user?: Decode,
}

interface IUser {
    id: number | string;
    password: string ;
    username?: string;
    email: string;
}

export {
    Decode, RequestWithUserRole, IUser
};