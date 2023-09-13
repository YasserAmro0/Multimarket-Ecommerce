import { Router } from 'express';
import { checkToken } from '../middlewares';
import { addReviewsController, getReviewsController } from '../controllers';
const router = Router();

router.post('/addreview/:productId', checkToken, addReviewsController);
router.get('/:productId', getReviewsController)

export default router;