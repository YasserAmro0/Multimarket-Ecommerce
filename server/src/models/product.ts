import mongoose, { Model } from 'mongoose';
import { IProduct } from '../types/models';
const { Schema } = mongoose;

const productSchema = new Schema<IProduct>({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    imageurl: {
        type: String,
        required: true,
    },
})

const Product : Model<IProduct>= mongoose.model('Products', productSchema);

export default Product;