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
            const existingProductIndex = productsInCart.findIndex(item => item.product._id.toString() === productId.toString());

            if (existingProductIndex !== -1) {

                productsInCart[existingProductIndex].quantity += cartItem.quantity;
            } else {
                productsInCart.push({
                    product,
                    quantity: cartItem.quantity,
                });
            }
        }
    }

    return productsInCart;
}

const deleteFromCart = async (userId: Types.ObjectId, productId: Types.ObjectId)  => {
    const cart = await Cart.findOne({ user: userId });
    if (!cart) {
        throw templateErrors.NOT_FOUND('Cart not found');
    }
    const itemIndex = cart.items.findIndex((item) => item.productId == productId);
    cart.items.splice(itemIndex, 1);
    const cartAfterDelete = await cart.save();
    return cartAfterDelete;
}

export { addToCart, getAllCart, deleteFromCart };