import { Request } from 'express';
import { Types } from 'mongoose';

interface Decode {
    userId?: Types.ObjectId;
}
// interface RequestWithUserRole extends Request {
//     user?: Decode,
// }

interface IUser {
    id: number | string;
    password: string ;
    username?: string;
    email: string;
}

export {
    Decode, IUser
};