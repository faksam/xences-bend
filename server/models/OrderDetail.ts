import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';
import { ProductAttributes, ProductInstance } from './Product';
import { UserAttributes, UserInstance } from './User';

export interface OrderDetailAttributes {
  id?: number;
  quantity: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface OrderDetailInstance extends Sequelize.Instance<OrderDetailAttributes>,
OrderDetailAttributes {
  // user
  getUser: Sequelize.BelongsToGetAssociationMixin<UserInstance>;
  setUser: Sequelize.BelongsToSetAssociationMixin<UserInstance, UserInstance['id']>;
  createUser: Sequelize.BelongsToCreateAssociationMixin<UserAttributes, UserInstance['id']>;

  // product
  getProduct: Sequelize.BelongsToGetAssociationMixin<ProductInstance>;
  setProduct: Sequelize.BelongsToSetAssociationMixin<ProductInstance, ProductInstance['id']>;
  createProduct: Sequelize.BelongsToCreateAssociationMixin<ProductAttributes, ProductInstance['id']>;
}

export const OrderDetailFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<OrderDetailInstance, OrderDetailAttributes> => {
  const attributes: SequelizeAttributes<OrderDetailAttributes> = {
    quantity: { type: DataTypes.STRING },
  };

  const OrderDetail = sequelize.define<OrderDetailInstance, OrderDetailAttributes>('OrderDetail', attributes);

  OrderDetail.associate = (models) => {
    OrderDetail.belongsTo(models.Order, { as: 'order', foreignKey: 'OrderId' });
    OrderDetail.belongsTo(models.Product, { as: 'product', foreignKey: 'ProductId' });
  };

  return OrderDetail;
};
