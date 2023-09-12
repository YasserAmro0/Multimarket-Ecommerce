import { Router } from 'express';
import userRouter from './auth';
import productRouter from './product';
import cartRouter from './cart';
const router = Router();

router.use('/auth', userRouter);
router.use('/product', productRouter);
router.use('/cart', cartRouter);

export default router;
