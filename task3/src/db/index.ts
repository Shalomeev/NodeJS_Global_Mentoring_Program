import { Sequelize } from 'sequelize';
import config from './config';

const { database, username, password, ...options } = config;

const sequelize = new Sequelize(database, username, password, { ...options });

export default sequelize;
