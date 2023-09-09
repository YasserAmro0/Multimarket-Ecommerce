import { NextFunction, Response, Request } from "express";
import * as yup from 'yup';
import { templateErrors, UserRegisterSchema } from "../helpers";
import { registerUser } from "../services/auth";

const Signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { body } = req;
        await UserRegisterSchema.validate(body);
        await registerUser(body);
        return res.status(201).json({ message: 'User registered successfully'});
    } catch (error) {
        if (error instanceof yup.ValidationError) {
            return next(templateErrors.BAD_REQUEST(error.message));
        }
        next(error);
    }
}
export { Signup };
