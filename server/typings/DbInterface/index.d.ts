import * as Sequelize from 'sequelize';
import { UserAttributes, UserInstance } from "../../models/User";
import { ProductAttributes, ProductInstance } from "../../models/Product";

export interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  User: Sequelize.Model<UserInstance, UserAttributes>;
  Product: Sequelize.Model<ProductInstance, ProductAttributes>;
}
