import { Types } from "mongoose";
import { Reviews, User } from "../models";
import reviews from "../types/reviews";


const addReviews = async (
    userId: Types.ObjectId,
    productId: Types.ObjectId,
    comment: String,
    rating: Number) => {
    
    const newReview = new Reviews({
        userId,
        productId,
        comment,
        rating,
    });

    const reviews = await newReview.save();
    return reviews;
}

const getAllReviewsForProduct = async (productId:Types.ObjectId) => {
    const reviewsForProduct = await Reviews.find({ productId });

    if (reviewsForProduct.length === 0) {
        return null; 
    }
    const userIds = reviewsForProduct.map(review => review.userId);

    const users = await User.find({ _id: { $in: userIds } });

    const userIdToUsername = new Map();

    users.forEach(user => {
        userIdToUsername.set(user._id.toString(), user.username);
    });

    const reviewsWithUserName = reviewsForProduct.map(review => ({
        ...review.toObject(),
        username : userIdToUsername.get(review.userId.toString()),
    }));


    return reviewsWithUserName;
}

export  { addReviews, getAllReviewsForProduct };