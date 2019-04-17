import Sequelize from 'sequelize';
import { ConfigEnv } from '../config/interface';
import { DbInterface } from '../typings/DbInterface';
import { AttributeFactory } from './Attribute';
import { AttributeValueFactory } from './AttributeValue';
import { BrandFactory } from './Brand';
import { CategoryFactory } from './Category';
import { OrderFactory } from './Order';
import { OrderDetailFactory } from './OrderDetail';
import { ProductFactory } from './Product';
import { RatingFactory } from './Rating';
import { ReviewFactory } from './Review';
import { ShopFactory } from './Shop';
import { UserFactory } from './User';
import { UserRoleFactory } from './UserRole';

export const createModels = (sequelizeConfig: ConfigEnv): DbInterface => {
  const { database, username, password, params } = sequelizeConfig;
  const sequelize = new Sequelize(database, username, password, params);

  const db: DbInterface = {
    sequelize,
    Sequelize,
    User: UserFactory(sequelize, Sequelize),
    Product: ProductFactory(sequelize, Sequelize),
    Attribute: AttributeFactory(sequelize, Sequelize),
    AttributeValue: AttributeValueFactory(sequelize, Sequelize),
    Brand: BrandFactory(sequelize, Sequelize),
    Category: CategoryFactory(sequelize, Sequelize),
    Order: OrderFactory(sequelize, Sequelize),
    OrderDetail: OrderDetailFactory(sequelize, Sequelize),
    Shop: ShopFactory(sequelize, Sequelize),
    Rating: RatingFactory(sequelize, Sequelize),
    Review: ReviewFactory(sequelize, Sequelize),
    UserRole: UserRoleFactory(sequelize, Sequelize),
  };

  Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
      db[modelName].associate(db);
    }
  });

  return db;
};
