const User = require('./User'); //need to establish route via controller folder.
const Survey = require('./Survey');

User.hasMany(Survey, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
  });
  //user can have many survey 
  Survey.belongsTo(User, {
   foreignKey: 'user_id'
  });
  //many survey belongs to user

module.exports = { User, Survey };