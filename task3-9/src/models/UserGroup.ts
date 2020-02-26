import sequelize from '../db';
const { Model, Sequelize } = require('sequelize');

class UserGroup extends Model {}

UserGroup.init({}, {
  sequelize,
  modelName: 'UserGroup',
});

export default UserGroup;
