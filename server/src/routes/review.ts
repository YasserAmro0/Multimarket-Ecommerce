import { Router } from 'express';
import { checkToken } from '../middlewares';
import { addReviewsController, deleteReviewController, getReviewsController, updateCommentController } from '../controllers';
const router = Router();

router.post('/addreview/:productId', checkToken, addReviewsController);
router.get('/:productId', getReviewsController);
router.put('/:idReview', checkToken, updateCommentController);
router.delete('/:idReview',deleteReviewController);

export default router;