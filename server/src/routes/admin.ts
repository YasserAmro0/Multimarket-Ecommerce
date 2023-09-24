import { Router } from 'express';
import {
    deleteProductAdminController,
    deleteReviewAdminController,
    getAllReviewsController,
    getProductAdminController,
    updateProductAdminController
} from '../controllers';
const router = Router();

router.get('/allreviews', getAllReviewsController);
router.delete('/review/:reviewId', deleteReviewAdminController);
router.get('/products', getProductAdminController);
router.delete('/product/:productId', deleteProductAdminController);
router.put('/product/:productId', updateProductAdminController)

export default router;