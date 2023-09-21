import { Router } from 'express';
import { Signup, LoginUserAdmin, LoginAdmin, getAuth  } from '../controllers';
import { checkToken } from '../middlewares';

const router = Router();

router.post('/signup', Signup);
router.post('/login',LoginUserAdmin);
router.get('/', checkToken, getAuth);
router.post('/login/admin', LoginAdmin);

export default router;