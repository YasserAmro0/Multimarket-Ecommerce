import { Types } from "mongoose";

interface IUser extends Document {
    username: string;
    password: string;
    email: string;
    _id: Types.ObjectId;
}

interface IProduct extends Document {
    title: string;
    price: number;
    category: string;
    description: string;
    shortDescription: string;
    imageurl: string;
}

interface IReview extends Document {
    userId: IUser;
    productId: IProduct;
    comment: string;
    rating: number;
}


export { IUser, IProduct, IReview }

