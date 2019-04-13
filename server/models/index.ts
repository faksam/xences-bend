import Sequelize from 'sequelize';
import { ConfigEnv } from '../config/interface';
import { DbInterface } from '../typings/DbInterface';
import { UserFactory } from './User';

export const createModels = (sequelizeConfig: ConfigEnv): DbInterface => {
  const { database, username, password, params } = sequelizeConfig;
  const sequelize = new Sequelize(database, username, password, params);

  const db: DbInterface = {
    sequelize,
    Sequelize,
    User: UserFactory(sequelize, Sequelize),
  };

  return db;
};
