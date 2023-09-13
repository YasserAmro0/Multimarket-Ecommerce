import mongoose from "mongoose";

interface ReviewsType{
    comment: string ;
    rating: number;
    productId: mongoose.Types.ObjectId ;
    userId: mongoose.Types.ObjectId ;
}
export default ReviewsType;