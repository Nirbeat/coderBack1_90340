import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/chat', (req, res) => {
    const { user } = req.query;
    if (!user) {
        return res.redirect('/');
    }
    res.render('chat', { user });
});

export default router;