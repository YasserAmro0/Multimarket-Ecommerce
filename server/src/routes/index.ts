import { Router } from 'express';
import userRouter from './auth';
import productRouter from './product';
import cartRouter from './cart';
import reviewRouter from './review';
const router = Router();

router.use('/auth', userRouter);
router.use('/product', productRouter);
router.use('/cart', cartRouter);
router.use('/review', reviewRouter);

export default router;
