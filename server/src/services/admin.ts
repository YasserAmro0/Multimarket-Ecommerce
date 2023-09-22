import mongoose, { Types } from "mongoose";
import { Reviews } from "../models";
import { templateErrors } from "../helpers";


const getAllReviews = async () => {
  
        const reviews = await Reviews.find({})
            .populate('userId', 'username')
            .populate('productId', 'title imageurl')
            .select('comment'); 
        
        const formattedReviews = reviews.map((review) => ({
            title: review.productId.title,
            imageurl: review.productId.imageurl,
            username: review.userId.username,
            comment: review.comment,
            _id: review.id,
        }));
    
    return formattedReviews;
}


const deleteReviewAdmin = async (reviewId: Types.ObjectId) => {
    const deletedReview = await Reviews.deleteOne({ _id: reviewId });
    if (!deletedReview) {
        throw templateErrors.NOT_FOUND("Review not found");
    }
    return deletedReview;
}

export { getAllReviews, deleteReviewAdmin };