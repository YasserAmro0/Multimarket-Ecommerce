import { Router } from 'express';
import { addProductController, getProductController } from '../controllers';
const router = Router();

router.post('/', addProductController);
router.get('/', getProductController);

export default router;
