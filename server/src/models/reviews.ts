import mongoose, { Model } from 'mongoose';
import { IReview } from '../types/models';
const { Schema } = mongoose;

const reviewsSchema = new Schema<IReview>({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Products',
        required: true,
    },
    comment: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        default: 0,
    }

});

const Reviews: Model<IReview> = mongoose.model('Reviews', reviewsSchema);

export default Reviews;


