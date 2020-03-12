import sequelize from '../db';
const { Model, Sequelize } = require('sequelize');
import { hideProtectedFields } from './utils';
import { PROTECTED_ATTRIBUTES } from './constants';

class Group extends Model {
    toJSON = hideProtectedFields(PROTECTED_ATTRIBUTES);
}

Group.init({
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  permissions: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false
  }
},
{
  sequelize,
  modelName: 'Group'
});

export default Group;
