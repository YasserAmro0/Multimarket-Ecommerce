import { NextFunction, Response, Request } from "express";
import * as yup from 'yup';
import { generateToken, templateErrors, userLoginSchema, userSignupSchema } from "../helpers";
import { registerUser, Login } from "../services";
import bcrypt from 'bcrypt';
import { IUser } from "../types";


// signup
const Signup = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { body } = req;
        await userSignupSchema.validate(body);
        await registerUser(body);
        return res.status(201).json({ message: 'User registered successfully'});
    } catch (error) {
        if (error instanceof yup.ValidationError) {
            return next(templateErrors.BAD_REQUEST(error.message));
        }
        next(error);
    }
}


// Login user and Admin
const LoginUserAdmin = async (req: Request, res: Response, next: NextFunction) => { 
  
    try {
        const { email, password } = req.body;
        await userLoginSchema.validate({ email, password });
        
        const user = await Login(email);
        if (!user) {
            throw templateErrors.BAD_REQUEST('Wrong email or password');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw templateErrors.BAD_REQUEST('Password does not match');
        }
        const idUser = parseInt(user._id.toString(), 16);
        const token = await generateToken({
            userId: idUser,
        });

        res.json({
            message: 'User logged in successfully',
            data: { access_token: token },
        });
    } catch (err) {
        if (err instanceof yup.ValidationError) {
            return next(templateErrors.BAD_REQUEST(err.message));
        }
        next(err);
    }
}
export { Signup, LoginUserAdmin };
