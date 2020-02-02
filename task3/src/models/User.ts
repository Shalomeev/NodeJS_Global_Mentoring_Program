import sequelize from '../db';
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

const PROTECTED_ATTRIBUTES = ['isDeleted', 'createdAt', 'updatedAt'];

class User extends Model {
    toJSON() {
    // hide protected fields
        const user = { ...this.get() };
        for (const protectedField of PROTECTED_ATTRIBUTES) {
            delete user[protectedField];
        }
        return user;
    }
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
