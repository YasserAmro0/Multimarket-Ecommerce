import { templateErrors } from "../helpers";
import { User } from "../models";
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

export default addToCart;