import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';

export interface ProductAttributes {
  id?: number;
  name: string;
  discount_percent: string;
  price: string;
  gender: string;
  brand: string;
  attribute: string;
  quantity: string;
  description: string;
  pictures: string;
  seller_id: string;
  category_id: string;
  review: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductInstance extends Sequelize.Instance<ProductAttributes>, ProductAttributes {
}

export const ProductFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<ProductInstance, ProductAttributes> => {
  const attributes: SequelizeAttributes<ProductAttributes> = {
    name: { type: DataTypes.STRING },
    discount_percent: { type: DataTypes.STRING },
    price: { type: DataTypes.STRING },
    gender: { type: DataTypes.STRING },
    brand: { type: DataTypes.STRING },
    attribute: { type: DataTypes.STRING },
    quantity: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
    pictures: { type: DataTypes.STRING },
    seller_id: { type: DataTypes.STRING },
    category_id: { type: DataTypes.STRING },
    review: { type: DataTypes.STRING },
  };

  const Product = sequelize.define<ProductInstance, ProductAttributes>('Product', attributes);

  return Product;
};
