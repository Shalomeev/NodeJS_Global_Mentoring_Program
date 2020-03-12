import sequelize from '../db';
import User from './User';
import Group from './Group';
import UserGroup from './UserGroup';

User.belongsToMany(Group, {
  through: UserGroup,
  onDelete: 'cascade'
});

Group.belongsToMany(User, {
  through: UserGroup,
  onDelete: 'cascade'
});

sequelize.sync();

export {
  User,
  Group,
  UserGroup
};
