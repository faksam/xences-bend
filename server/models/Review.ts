import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';
import { ProductAttributes, ProductInstance } from './Product';
import { ShopAttributes, ShopInstance } from './Shop';
import { UserAttributes, UserInstance } from './User';

export interface ReviewAttributes {
  id?: number;
  review: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ReviewInstance extends Sequelize.Instance<ReviewAttributes>, ReviewAttributes {
    // product
  getProductIds: Sequelize.BelongsToManyGetAssociationsMixin<ProductInstance>;
  setProductIds: Sequelize.BelongsToManySetAssociationsMixin<ProductInstance,
    ProductInstance['id'], 'ProductReview'>;
  addProductIds: Sequelize.BelongsToManyAddAssociationsMixin<ProductInstance,
    ProductInstance['id'], 'ProductReview'>;
  addProductId: Sequelize.BelongsToManyAddAssociationMixin<ProductInstance,
    ProductInstance['id'], 'ProductReview'>;
  createProductId: Sequelize.BelongsToManyCreateAssociationMixin<ProductAttributes,
    ProductInstance['id'], 'ProductReview'>;
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
    ShopInstance['id'], 'ShopReview'>;
  addShopIds: Sequelize.BelongsToManyAddAssociationsMixin<ShopInstance,
    ShopInstance['id'], 'ShopReview'>;
  addShopId: Sequelize.BelongsToManyAddAssociationMixin<ShopInstance,
    ShopInstance['id'], 'ShopReview'>;
  createShopId: Sequelize.BelongsToManyCreateAssociationMixin<ShopAttributes,
    ShopInstance['id'], 'ShopReview'>;
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

export const ReviewFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<ReviewInstance, ReviewAttributes> => {
  const attributes: SequelizeAttributes<ReviewAttributes> = {
    review: { type: DataTypes.STRING },
  };

  const Review = sequelize.define<ReviewInstance, ReviewAttributes>('Review', attributes);

  Review.associate = (models) => {
    Review.belongsToMany(models.Product, {
      through: 'ProductReview',
    });
    Review.belongsToMany(models.Shop, {
      through: 'ShopReview',
    });
    Review.belongsTo(models.User, { as: 'user', foreignKey: 'UserId' });
  };

  return Review;
};
