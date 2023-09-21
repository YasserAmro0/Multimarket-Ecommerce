import { Types } from "mongoose";
import { Reviews, User } from "../models";
import reviews from "../types/reviews";
import { templateErrors } from "../helpers";


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
        return []; 
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

const updateComment = async (userId: string, idReview: Types.ObjectId, newComment: string) => {
    
    console.log(userId, 'userId');
    const review = await Reviews.findById(idReview);

    if (!review) {
        throw templateErrors.NOT_FOUND('Comment not found');

    }
    const reviewId = review.userId.toString();
    if (reviewId !== userId) {
        throw templateErrors.UNAUTHORIZED("You can't edit this");
    }
    review.comment = newComment;
    const afterUpdate = await review.save();
    return afterUpdate;
}

const deleteReview = async (idReview: Types.ObjectId) => {
    const afterDelete = await Reviews.deleteOne({ _id: idReview });
    if (!afterDelete) {
        throw templateErrors.NOT_FOUND('review not found');

    }
    return afterDelete;
    
}

export { addReviews, getAllReviewsForProduct, updateComment, deleteReview };