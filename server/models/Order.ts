import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';
import { UserAttributes, UserInstance } from './User';

export interface OrderAttributes {
  id?: number;
  total: string;
  status: string;
  orderNow: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface OrderInstance extends Sequelize.Instance<OrderAttributes>,
OrderAttributes {
  getUser: Sequelize.BelongsToGetAssociationMixin<UserInstance>;
  setUser: Sequelize.BelongsToSetAssociationMixin<UserInstance, UserInstance['id']>;
  createUser: Sequelize.BelongsToCreateAssociationMixin<UserAttributes, UserInstance['id']>;
}

export const OrderFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<OrderInstance, OrderAttributes> => {
  const attributes: SequelizeAttributes<OrderAttributes> = {
    total: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
    orderNow: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  };

  const Order = sequelize.define<OrderInstance, OrderAttributes>('Order', attributes);

  Order.associate = (models) => {
    Order.belongsTo(models.User, { as: 'user', foreignKey: 'UserId' });
  };

  return Order;
};
