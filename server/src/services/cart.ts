import { templateErrors } from "../helpers";
import { Product, User } from "../models";
import { Cart } from "../models";
import { Types } from "mongoose";


const addToCart = async (userId: Types.ObjectId, productId: Types.ObjectId , quantity: number) => {
    const user = await User.findById(userId);
    if (!user) {
        throw templateErrors.BAD_REQUEST('Please login before adding items to your cart ');
    }
    const cart = await Cart.findOne({ user: userId });
    
    if (!cart) {
        const newCart = new Cart({
            user: userId,
            items: [{ productId, quantity }],
        });
        await newCart.save();
    } else {
        const existingItem = cart.items.find((item) => item.productId === productId );
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({ productId , quantity });
        }
        await cart.save();
    }

}


const getAllCart = async (userId: Types.ObjectId) => {
    const userCart = await Cart.findOne({ user: userId });
    if (!userCart) {
        return [];
    }
    const cartItems = userCart.items;

    const productsInCart = [];

    for (const cartItem of cartItems) {
        const productId = cartItem.productId;
        const product = await Product.findById(productId);

        if (product) {
            productsInCart.push({
                product,
                quantity: cartItem.quantity,
            });
        }
    }

    return productsInCart;
}

export { addToCart, getAllCart };