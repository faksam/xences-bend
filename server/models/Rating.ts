import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';
import { ProductAttributes, ProductInstance } from './Product';
import { ShopAttributes, ShopInstance } from './Shop';
import { UserAttributes, UserInstance } from './User';

export interface RatingAttributes {
  id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface RatingInstance extends Sequelize.Instance<RatingAttributes>, RatingAttributes {
  // product
  getProductIds: Sequelize.BelongsToManyGetAssociationsMixin<ProductInstance>;
  setProductIds: Sequelize.BelongsToManySetAssociationsMixin<ProductInstance,
  ProductInstance['id'], 'ProductRating'>;
  addProductIds: Sequelize.BelongsToManyAddAssociationsMixin<ProductInstance,
  ProductInstance['id'], 'ProductRating'>;
  addProductId: Sequelize.BelongsToManyAddAssociationMixin<ProductInstance,
  ProductInstance['id'], 'ProductRating'>;
  createProductId: Sequelize.BelongsToManyCreateAssociationMixin<ProductAttributes,
  ProductInstance['id'], 'ProductRating'>;
  removeProductIds: Sequelize.BelongsToManyRemoveAssociationMixin<ProductInstance,
  ProductInstance['id']>;
  removeProductId: Sequelize.BelongsToManyRemoveAssociationsMixin<ProductInstance,
  ProductInstance['id']>;
  hasProductId: Sequelize.BelongsToManyHasAssociationMixin<ProductInstance,
  ProductInstance['id']>;
  hasProductIds: Sequelize.BelongsToManyHasAssociationsMixin<ProductInstance,
  ProductInstance['id']>;
  countProductIds: Sequelize.BelongsToManyCountAssociationsMixin;

  // shop
  getShopIds: Sequelize.BelongsToManyGetAssociationsMixin<ShopInstance>;
  setShopIds: Sequelize.BelongsToManySetAssociationsMixin<ShopInstance,
  ShopInstance['id'], 'ShopRating'>;
  addShopIds: Sequelize.BelongsToManyAddAssociationsMixin<ShopInstance,
  ShopInstance['id'], 'ShopRating'>;
  addShopId: Sequelize.BelongsToManyAddAssociationMixin<ShopInstance,
  ShopInstance['id'], 'ShopRating'>;
  createShopId: Sequelize.BelongsToManyCreateAssociationMixin<ShopAttributes,
  ShopInstance['id'], 'ShopRating'>;
  removeShopIds: Sequelize.BelongsToManyRemoveAssociationMixin<ShopInstance,
  ShopInstance['id']>;
  removeShopId: Sequelize.BelongsToManyRemoveAssociationsMixin<ShopInstance,
  ShopInstance['id']>;
  hasShopId: Sequelize.BelongsToManyHasAssociationMixin<ShopInstance,
  ShopInstance['id']>;
  hasShopIds: Sequelize.BelongsToManyHasAssociationsMixin<ShopInstance,
  ShopInstance['id']>;
  countShopIds: Sequelize.BelongsToManyCountAssociationsMixin;

  // user
  getUser: Sequelize.BelongsToGetAssociationMixin<UserInstance>;
  setUser: Sequelize.BelongsToSetAssociationMixin<UserInstance, UserInstance['id']>;
  createUser: Sequelize.BelongsToCreateAssociationMixin<UserAttributes, UserInstance['id']>;
}

export const RatingFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<RatingInstance, RatingAttributes> => {
  const attributes: SequelizeAttributes<RatingAttributes> = {
  };

  const Rating = sequelize.define<RatingInstance, RatingAttributes>('Rating', attributes);

  Rating.associate = (models) => {
    Rating.belongsToMany(models.Product, {
      through: 'ProductRating',
    });
    Rating.belongsToMany(models.Shop, {
      through: 'ShopRating',
    });
    Rating.belongsTo(models.User, { as: 'user', foreignKey: 'UserId' });
  };

  return Rating;
};
