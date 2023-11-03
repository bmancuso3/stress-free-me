const router =require('express').Router();
const { AAAA, BBBB} = require('../models');

router.get('/', async (req,res) =>{
    try{
        const stressData = await AAAA.findAll({
            include: [
                {
                    model: BBBB,
                    attributes: ['name'],
                },
            ],
        });
        
        const stress = stressData.get({ plain: true });

        res.render('stress', {
            ...stress,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/stressQuestions');
        return;
    }

    res.render('login');
});

module.exports = router;