import * as Sequelize from 'sequelize';
import { UserAttributes, UserInstance } from "../../models/User";
import { ProductAttributes, ProductInstance } from "../../models/Product";
import { AttributeAttributes, AttributeInstance } from "../../models/Attribute";
import { AttributeValueAttributes, AttributeValueInstance } from "../../models/AttributeValue";

export interface DbInterface {
  sequelize: Sequelize.Sequelize;
  Sequelize: Sequelize.SequelizeStatic;
  User: Sequelize.Model<UserInstance, UserAttributes>;
  Product: Sequelize.Model<ProductInstance, ProductAttributes>;
  Attribute: Sequelize.Model<AttributeInstance, AttributeAttributes>;
  AttributeValue: Sequelize.Model<AttributeValueInstance, AttributeValueAttributes>;
  [key: string]: any;
}
