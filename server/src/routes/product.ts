import { Router } from 'express';
import {  addProductController, getProductByIdController, getProductController } from '../controllers';
const router = Router();

router.post('/', addProductController);
router.get('/', getProductController);
router.get('/:productId', getProductByIdController)
export default router;
