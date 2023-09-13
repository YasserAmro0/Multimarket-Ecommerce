import mongoose from 'mongoose';
const { Schema } = mongoose;

const reviewsSchema = new Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
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

const Reviews = mongoose.model('Reviews', reviewsSchema);

export default Reviews;


