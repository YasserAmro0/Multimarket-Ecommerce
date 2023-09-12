import { Router } from 'express';
import { Signup, LoginUserAdmin } from '../controllers';
import { checkToken } from '../middlewares';

const router = Router();

router.post('/signup', Signup);
router.post('/login',LoginUserAdmin);
router.get('/', checkToken);

export default router;