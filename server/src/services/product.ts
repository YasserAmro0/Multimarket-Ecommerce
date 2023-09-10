import { Db } from "mongodb";
import { Product } from "../models"
import { ProductType } from "../types";

const AddProduct = async ({
    title, price, category, description, shortDescription, imageurl
}: ProductType) => {
 
    const product = new Product({
        title,
        price,
        category,
        description,
        shortDescription,
        imageurl,
    });
    await product.save();

    return product;

}

const GetProduct = async () => {
    const products = Product.find();
    return products;
}
 
export { AddProduct, GetProduct };