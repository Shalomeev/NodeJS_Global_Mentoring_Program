import { Dialect } from 'sequelize'; // eslint-disable-line

interface Config {
    username: string;
    password: string;
    database: string;
    dialect: Dialect;
    protocol: string;
    port: number;
    host: string;
}

const config: Config = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  dialect: process.env.DB_DIALECT as Dialect,
  protocol: process.env.DB_PROTOCOL,
  port: Number(process.env.DB_PORT),
  host: process.env.DB_HOST
};

export default config;
