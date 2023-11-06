const sequelize = require('../config/connection');
const { User, Survey } = require('../models');

const userData = require('./userData.json');
const surveyData = require('./surveyData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const survey of surveyData) {
    await Survey.create({
      ...survey,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  // for (let i = 0; i < surveyData.length; i++) {
  //   const survey = surveyData[i];
  //   const userId = users[i % users.length].id;

  //   await Survey.create({
  //     ...survey,
  //     user_id: userId,
  //   });
  // } LEAVING this code here as this equals id=user. Still getting random numbers so need to fix it! 
  
  process.exit(0);
};

seedDatabase();
