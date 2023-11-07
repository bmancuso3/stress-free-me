const router = require('express').Router();
const userRoutes = require('./userRoutes');
const surveyRoutes = require('./surveyRoutes');
const resultRoutes = require('./resultRoutes');

router.use('/users', userRoutes);
router.use('/surveys', surveyRoutes);
router.use('/results', resultRoutes);

module.exports = router;