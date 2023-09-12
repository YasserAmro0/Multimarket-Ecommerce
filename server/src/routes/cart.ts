import { Router } from 'express';
import { addToCartController, getAllProductsInCart } from '../controllers';
import { checkToken } from '../middlewares';
const router = Router();


router.post('/addToCart/:productId', checkToken, addToCartController);
router.get('/getproduct', checkToken, getAllProductsInCart);

export default router;
