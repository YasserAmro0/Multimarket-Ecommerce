import { Router } from 'express';
import { Signup, LoginUserAdmin } from '../controllers';

const router = Router();

router.post('/signup', Signup);
router.post('/login', LoginUserAdmin);

export default router;