import { Router } from 'express';
import { addToCartController, deleteFromCartController, getAllProductsInCart } from '../controllers';
import { checkToken } from '../middlewares';
const router = Router();


router.post('/addToCart/:productId', checkToken, addToCartController);
router.get('/getproduct', checkToken, getAllProductsInCart);
router.delete('/:productId',checkToken, deleteFromCartController);

export default router;
