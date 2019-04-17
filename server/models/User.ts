import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';
import { OrderAttributes, OrderInstance } from './Order';
import { RatingAttributes, RatingInstance } from './Rating';
import { ReviewAttributes, ReviewInstance } from './Review';
import { ShopAttributes, ShopInstance } from './Shop';
import { UserRoleAttributes, UserRoleInstance } from './UserRole';

export interface UserAttributes {
  id?: number;
  fullname: string;
  email: string;
  phone: string;
  address: string;
  password: string;
  roleId: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserInstance extends Sequelize.Instance<UserAttributes>, UserAttributes {
  // userrole
  getUserRole: Sequelize.BelongsToGetAssociationMixin<UserRoleInstance>;
  setUserRole: Sequelize.BelongsToSetAssociationMixin<UserRoleInstance, UserRoleInstance['id']>;
  createUserRole: Sequelize.BelongsToCreateAssociationMixin<UserRoleAttributes, UserRoleInstance['id']>;

  // order
  getOrder: Sequelize.BelongsToGetAssociationMixin<OrderInstance>;
  setOrder: Sequelize.BelongsToSetAssociationMixin<OrderInstance, OrderInstance['id']>;
  createOrder: Sequelize.BelongsToCreateAssociationMixin<OrderAttributes, OrderInstance['id']>;

  // review
  getReview: Sequelize.BelongsToGetAssociationMixin<ReviewInstance>;
  setReview: Sequelize.BelongsToSetAssociationMixin<ReviewInstance, ReviewInstance['id']>;
  createReview: Sequelize.BelongsToCreateAssociationMixin<ReviewAttributes, ReviewInstance['id']>;

  // rating
  getRating: Sequelize.BelongsToGetAssociationMixin<RatingInstance>;
  setRating: Sequelize.BelongsToSetAssociationMixin<RatingInstance, RatingInstance['id']>;
  createRating: Sequelize.BelongsToCreateAssociationMixin<RatingAttributes, RatingInstance['id']>;

  // shop
  getShop: Sequelize.BelongsToGetAssociationMixin<ShopInstance>;
  setShop: Sequelize.BelongsToSetAssociationMixin<ShopInstance, ShopInstance['id']>;
  createShop: Sequelize.BelongsToCreateAssociationMixin<ShopAttributes, ShopInstance['id']>;
}

export const UserFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<UserInstance, UserAttributes> => {
  const attributes: SequelizeAttributes<UserAttributes> = {
    fullname: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    roleId: {
      type: DataTypes.STRING,
      defaultValue: 'Buyer',
    },
  };

  const User = sequelize.define<UserInstance, UserAttributes>('User', attributes);

  User.associate = (models) => {
    User.belongsTo(models.UserRole);
    User.hasMany(models.Order);
    User.hasMany(models.Review);
    User.hasMany(models.Rating);
    User.hasMany(models.Shop);
  };

  return User;
};
