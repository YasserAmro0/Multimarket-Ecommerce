import { Router } from 'express';
import { deleteReviewAdminController, getAllReviewsController } from '../controllers';
const router = Router();

router.get('/allreviews', getAllReviewsController);
router.delete('/review/:reviewId', deleteReviewAdminController)

export default router;