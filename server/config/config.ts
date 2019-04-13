import dotenv from 'dotenv';

import { ConfigEnv } from './interface';

dotenv.config();

const config: ConfigEnv = {
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  params: {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    operatorsAliases: false,
  },
};

export default config;
