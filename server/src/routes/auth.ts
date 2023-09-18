import { Router } from 'express';
import { Signup, LoginUserAdmin } from '../controllers';
import { checkToken } from '../middlewares';
import { getAuth } from '../controllers/auth';

const router = Router();

router.post('/signup', Signup);
router.post('/login',LoginUserAdmin);
router.get('/', checkToken, getAuth);

export default router;