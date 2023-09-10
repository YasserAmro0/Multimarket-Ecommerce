import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
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
    }
});

const Product = mongoose.model('Products', productSchema);

export default Product;