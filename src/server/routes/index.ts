import * as express from 'express';
import chirpsRouter from './chirps';
import usersRouter from './users';
import donateRouter from './donate';
import apiRouter from './api';
import authRouter from './auth';

const router = express.Router();

router.use('/api/chirps', chirpsRouter);
router.use('/api/users', usersRouter);
router.use('/api/donate', donateRouter);
router.use('/api/contact', apiRouter);
router.use('/auth', authRouter);
router.use('/api/pizza', apiRouter);

export default router;