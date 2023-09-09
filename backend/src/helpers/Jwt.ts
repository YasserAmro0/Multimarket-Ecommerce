import { verify, Secret, sign } from 'jsonwebtoken';
import config from '../config';
import { IPayload } from '../types';


const verifyToken = (token: string) => new Promise((resolve, reject) => {
    verify(token, config.SECRET_KEY as Secret, (error: Error | null, decoded) => {
        if (error) {
            reject(error);
        }
        resolve(decoded);
    });
});

const generateToken = (payload: IPayload): Promise<string> => new Promise((resolve, reject) => {
    sign(payload, config.SECRET_KEY as Secret, (error, token) => {
        if (error) {
            reject(error);
        }
        resolve(token as string);
    });
});

export { verifyToken, generateToken };