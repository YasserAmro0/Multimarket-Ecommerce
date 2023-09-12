import bcrypt from 'bcrypt';
import { User } from "../models";
import { IUser } from "../types";
import { templateErrors } from '../helpers';
import mongoose from 'mongoose';

// RegisterUser
const registerUser = async ({
    username,password,email
}: IUser) => {
    const userExist = await User.findOne({ email });
    console.log(userExist);
    if (userExist) {
        throw templateErrors.BAD_REQUEST('User already exists. Please login instead.');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const UserData = {
        _id: new mongoose.Types.ObjectId(),
        username: username,
        email: email,
        password: hashedPassword,
    };
     await User.create(UserData);
    return User;
};


// loginUser 
const Login = async (email: string) => {
    const user = await User.findOne({
        email,
    }).select('email password username');
    return user;
    
}


export { registerUser, Login };