const router = require('express').Router();
const { Survey } = require('../../models');
const withAuth = require('../../utils/auth');


router.post('/', withAuth, async (req, res)=>{
    try{
        const newSurvey = await Survey.create({...req.body, user_id: req.session.user_id})

        res.json(newSurvey)

    }catch(err){
        console.log(err);
        res.json(err)
    }
})

////Calls for data from surveys
// router.get('/:UserId', withAuth, async (req,res) =>{
//     try{
//         const surveys = Survey.findAll({where:{user_id: req.params.UserId}});

//         res.json(surveys);
//     }catch(err){
//         console.log(err);
//         res.json(err)
//     }
// })

module.exports = router;