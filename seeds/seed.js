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

  process.exit(0);
};

seedDatabase();
