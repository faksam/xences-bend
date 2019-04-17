import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';
import { ProductAttributes, ProductInstance } from './Product';

export interface CategoryAttributes {
  id?: number;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface CategoryInstance extends Sequelize.Instance<CategoryAttributes>, CategoryAttributes {
  // product
  getProductIds: Sequelize.BelongsToManyGetAssociationsMixin<ProductInstance>;
  setProductIds: Sequelize.BelongsToManySetAssociationsMixin<ProductInstance,
  ProductInstance['id'], 'ProductCategory'>;
  addProductIds: Sequelize.BelongsToManyAddAssociationsMixin<ProductInstance,
  ProductInstance['id'], 'ProductCategory'>;
  addProductId: Sequelize.BelongsToManyAddAssociationMixin<ProductInstance,
  ProductInstance['id'], 'ProductCategory'>;
  createProductId: Sequelize.BelongsToManyCreateAssociationMixin<ProductAttributes,
  ProductInstance['id'], 'ProductCategory'>;
  removeProductIds: Sequelize.BelongsToManyRemoveAssociationMixin<ProductInstance,
  ProductInstance['id']>;
  removeProductId: Sequelize.BelongsToManyRemoveAssociationsMixin<ProductInstance,
  ProductInstance['id']>;
  hasProductId: Sequelize.BelongsToManyHasAssociationMixin<ProductInstance,
  ProductInstance['id']>;
  hasProductIds: Sequelize.BelongsToManyHasAssociationsMixin<ProductInstance,
  ProductInstance['id']>;
  countProductIds: Sequelize.BelongsToManyCountAssociationsMixin;
}

export const CategoryFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<CategoryInstance, CategoryAttributes> => {
  const attributes: SequelizeAttributes<CategoryAttributes> = {
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
  };

  const Category = sequelize.define<CategoryInstance, CategoryAttributes>('Category', attributes);

  Category.associate = (models) => {
    Category.belongsToMany(models.Product, {
      through: 'ProductCategory',
      as: 'CategoryId',
    });
  };

  return Category;
};
