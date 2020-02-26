import sequelize from '../db';
const { Sequelize, Model } = require('sequelize');
import { hideProtectedFields } from './utils';
import { PROTECTED_ATTRIBUTES } from './constants';

const PROTECTED_FIELDS = [...PROTECTED_ATTRIBUTES, 'isDeleted'];

class User extends Model {
    toJSON = hideProtectedFields(PROTECTED_FIELDS);
}

User.init({
    login: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    age: {
        type: Sequelize.INTEGER,
        allowNull: true
    },
    isDeleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
},
{
    sequelize,
    modelName: 'User'
});

export default User;
