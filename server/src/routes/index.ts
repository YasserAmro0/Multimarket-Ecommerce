import { Router } from 'express';
import userRouter from './auth';
import productRouter from './product';
const router = Router();

router.use('/auth', userRouter);
router.use('/product', productRouter);

export default router;
