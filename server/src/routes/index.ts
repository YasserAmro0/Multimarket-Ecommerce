import { Router } from 'express';
import userRouter from './auth';
const router = Router();

router.use('/auth', userRouter);

export default router;
