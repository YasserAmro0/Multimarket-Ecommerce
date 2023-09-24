import { NextFunction, Response, Request } from "express";
import * as yup from 'yup';
import { generateToken, templateErrors, userLoginSchema, userSignupSchema } from "../helpers";
import { registerUser, Login } from "../services";
import bcrypt from 'bcrypt';
import { RequestWithUserRole } from "../types";
import { User } from "../models";
import config from '../config';



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
            throw templateErrors.BAD_REQUEST('Password  Wrong try again');
        }
        const token = await generateToken({
            userId: user._id,
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

const getAuth = async (req: RequestWithUserRole, res: Response, next: NextFunction) => {
    let data;
    const user = req.user;
    try {
        const userData = await User.findById(user.userId).select("username _id");
        data = userData;
        res.json({
            message: 'success',
            data, 
        });
    } catch (error) {
        next(error);
    }
}


const LoginAdmin = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;
    try {
        if (email !== config.AdminEmail) {
            throw templateErrors.BAD_REQUEST('Email  Wrong try again');
        }
        if (password !==config.AdminPassword ) {
            throw templateErrors.BAD_REQUEST('Password  Wrong try again');
        }
        const token = await generateToken({
            isAdmin: true,
        });
        res.json({
            message: 'Admin logged in successfully',
            data: { access_token: token },
        });
    } catch (error) {
        next(error);
    }

    
}
export { Signup, LoginUserAdmin, getAuth, LoginAdmin };
