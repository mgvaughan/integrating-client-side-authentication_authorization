import { Router } from 'express';
import { ReqUser } from '../../../types';
import * as passport from 'passport';

const router = Router();

router.get('/', passport.authenticate('jwt', {session: false}), (req: ReqUser, res) => {
    try {
        res.json({ message: `Enjoy your Pizza Time ${req.user!.email}!` })
    } catch(error) {
        console.log(error)
        res.status(500).json({ message: `my code sucks, let me know!`, error: error.message })
    }

})

export default router;