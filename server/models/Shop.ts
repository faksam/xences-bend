import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';
import { RatingAttributes, RatingInstance } from './Rating';
import { ReviewAttributes, ReviewInstance } from './Review';
import { UserAttributes, UserInstance } from './User';

export interface ShopAttributes {
  id?: number;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ShopInstance extends Sequelize.Instance<ShopAttributes>, ShopAttributes {
  // user
  getUser: Sequelize.BelongsToGetAssociationMixin<UserInstance>;
  setUser: Sequelize.BelongsToSetAssociationMixin<UserInstance, UserInstance['id']>;
  createUser: Sequelize.BelongsToCreateAssociationMixin<UserAttributes, UserInstance['id']>;

  // review
  getReviewIds: Sequelize.BelongsToManyGetAssociationsMixin<ReviewInstance>;
  setReviewIds: Sequelize.BelongsToManySetAssociationsMixin<ReviewInstance,
  ReviewInstance['id'], 'ProductReview'>;
  addReviewIds: Sequelize.BelongsToManyAddAssociationsMixin<ReviewInstance,
  ReviewInstance['id'], 'ProductReview'>;
  addReviewId: Sequelize.BelongsToManyAddAssociationMixin<ReviewInstance,
  ReviewInstance['id'], 'ProductReview'>;
  createReviewId: Sequelize.BelongsToManyCreateAssociationMixin<ReviewAttributes,
  ReviewInstance['id'], 'ProductReview'>;
  removeReviewIds: Sequelize.BelongsToManyRemoveAssociationMixin<ReviewInstance,
  ReviewInstance['id']>;
  removeReviewId: Sequelize.BelongsToManyRemoveAssociationsMixin<ReviewInstance,
  ReviewInstance['id']>;
  hasReviewId: Sequelize.BelongsToManyHasAssociationMixin<ReviewInstance,
  ReviewInstance['id']>;
  hasReviewIds: Sequelize.BelongsToManyHasAssociationsMixin<ReviewInstance,
  ReviewInstance['id']>;
  countReviewIds: Sequelize.BelongsToManyCountAssociationsMixin;

  // rating
  getRatingIds: Sequelize.BelongsToManyGetAssociationsMixin<RatingInstance>;
  setRatingIds: Sequelize.BelongsToManySetAssociationsMixin<RatingInstance,
  RatingInstance['id'], 'ProductRating'>;
  addRatingIds: Sequelize.BelongsToManyAddAssociationsMixin<RatingInstance,
  RatingInstance['id'], 'ProductRating'>;
  addRatingId: Sequelize.BelongsToManyAddAssociationMixin<RatingInstance,
  RatingInstance['id'], 'ProductRating'>;
  createRatingId: Sequelize.BelongsToManyCreateAssociationMixin<RatingAttributes,
  RatingInstance['id'], 'ProductRating'>;
  removeRatingIds: Sequelize.BelongsToManyRemoveAssociationMixin<RatingInstance,
  RatingInstance['id']>;
  removeRatingId: Sequelize.BelongsToManyRemoveAssociationsMixin<RatingInstance,
  RatingInstance['id']>;
  hasRatingId: Sequelize.BelongsToManyHasAssociationMixin<RatingInstance,
  RatingInstance['id']>;
  hasRatingIds: Sequelize.BelongsToManyHasAssociationsMixin<RatingInstance,
  RatingInstance['id']>;
  countRatingIds: Sequelize.BelongsToManyCountAssociationsMixin;
}

export const ShopFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<ShopInstance, ShopAttributes> => {
  const attributes: SequelizeAttributes<ShopAttributes> = {
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
  };

  const Shop = sequelize.define<ShopInstance, ShopAttributes>('Shop', attributes);

  Shop.associate = (models) => {
    Shop.hasMany(models.Product);
    Shop.belongsToMany(models.Review, {
      through: 'ShopReview',
    });
    Shop.belongsToMany(models.Rating, {
      through: 'ShopRating',
    });
    Shop.belongsTo(models.User, { as: 'user', foreignKey: 'UserId' });
  };

  return Shop;
};
