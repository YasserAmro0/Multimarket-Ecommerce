import { Router } from 'express';
import { addToCartController } from '../controllers';
import { checkToken } from '../middlewares';
const router = Router();


router.post('/addToCart/:productId', checkToken, addToCartController);

export default router;
