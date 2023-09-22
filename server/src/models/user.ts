import mongoose, { Model } from 'mongoose';
import { IUser } from '../types/models';
const { Schema } = mongoose;


const userSchema = new Schema<IUser>({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        
    },
    email: {
        type: String,
        required: true,
    }
});


const User: Model<IUser> = mongoose.model('User', userSchema);


export default User;

