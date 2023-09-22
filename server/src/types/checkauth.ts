import { Types } from 'mongoose';

interface Decode {
    userId?: Types.ObjectId;
}

interface IUser {
    id: number | string;
    password: string ;
    username?: string;
    email: string;
}

export {
    Decode, IUser
};