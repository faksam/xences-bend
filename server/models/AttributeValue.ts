import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';
import { AttributeAttributes, AttributeInstance } from './Attribute';
import { ProductAttributes, ProductInstance } from './Product';

export interface AttributeValueAttributes {
  id?: number;
  value: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AttributeValueInstance extends Sequelize.Instance<AttributeValueAttributes>, AttributeValueAttributes {
  getAttribute: Sequelize.BelongsToGetAssociationMixin<AttributeInstance>;
  setAttribute: Sequelize.BelongsToSetAssociationMixin<AttributeInstance, AttributeInstance['id']>;
  createAttribute: Sequelize.BelongsToCreateAssociationMixin<AttributeAttributes, AttributeInstance['id']>;

  getProductIds: Sequelize.BelongsToManyGetAssociationsMixin<ProductInstance>;
  setProductIds: Sequelize.BelongsToManySetAssociationsMixin<ProductInstance,
  ProductInstance['id'], 'ProductAttribute'>;
  addProductIds: Sequelize.BelongsToManyAddAssociationsMixin<ProductInstance,
  ProductInstance['id'], 'ProductAttribute'>;
  addProductId: Sequelize.BelongsToManyAddAssociationMixin<ProductInstance,
  ProductInstance['id'], 'ProductAttribute'>;
  createProductId: Sequelize.BelongsToManyCreateAssociationMixin<ProductAttributes,
  ProductInstance['id'], 'ProductAttribute'>;
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

export const AttributeValueFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<AttributeValueInstance, AttributeValueAttributes> => {
  const attributes: SequelizeAttributes<AttributeValueAttributes> = {
    value: {
      type: DataTypes.STRING,
    },
  };

  const AttributeValue = sequelize.define< AttributeValueInstance,
  AttributeValueAttributes >('AttributeValue', attributes);

  AttributeValue.associate = (models) => {
    AttributeValue.belongsTo(models.Attribute, { as: 'attribute', foreignKey: 'AttributeId' });
    AttributeValue.belongsToMany(models.Product, {
      through: 'ProductAttribute',
      as: 'AttributeValueId',
    });
  };

  return AttributeValue;
};
