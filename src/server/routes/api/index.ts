import * as express from 'express';
import contactRouter from './contact';
import pizzaRouter from './pizza';

const router = express.Router();

router.use('/', contactRouter);
router.use('/', pizzaRouter);

export default router;