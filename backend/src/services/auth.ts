import bcrypt from 'bcrypt';
import { User } from "../models";
import { IUser } from "../types";
const registerUser = async ({
    username,password,email
}: IUser) => {
    console.log(username, password, email)
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = new User({
        username,
        email,
        password: hashedPassword,
    });
    await user.save();
    return user;
};

export { registerUser };