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

    const user = await User.findById(userId).lean();
    const username = user?.username;

    if (!user) {
        throw new Error('User not found');
    }

    return {
         ...reviews.toObject(),
        username: username,
    };
}

const getAllReviewsForProduct = async (productId:Types.ObjectId) => {
    const reviewsForProduct = await Reviews.find({ productId })
        .populate('userId', 'username _id');

    if (reviewsForProduct.length === 0) {
        return [];
    }

    const reviewsWithUserName = reviewsForProduct.map(review => ({
        productId: review.productId,
        userId: review.userId._id.toString(),
        username: review.userId.username,
        comment: review.comment,
        rating: review.rating,
        _id:review._id,
        
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