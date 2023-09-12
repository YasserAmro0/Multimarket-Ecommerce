import mongoose from 'mongoose';
const { Schema } = mongoose;

const cartSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Products',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                default: 1, 
            },
        },
    ],

});

const Cart = mongoose.model('Cart', cartSchema);

export default Cart;

