import { Router } from 'express';
import { Signup } from '../controllers';

const router = Router();

router.post('/signup', Signup);

export default router;