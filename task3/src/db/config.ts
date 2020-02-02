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
    username: 'wugujesf',
    password: 'gikCwqld-GZbdY3f2GpjOuZSy3uZejuw',
    database: 'wugujesf',
    dialect: 'postgres',
    protocol: 'postgres',
    port: 5432,
    host: 'rajje.db.elephantsql.com'
};

export default config;
