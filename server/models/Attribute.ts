import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';
import { AttributeValueAttributes, AttributeValueInstance } from './AttributeValue';

export interface AttributeAttributes {
  id?: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface AttributeInstance extends Sequelize.Instance<AttributeAttributes>, AttributeAttributes {
  getAttributeValues: Sequelize.HasManyGetAssociationsMixin<AttributeValueInstance>;
  setAttributeValues: Sequelize.HasManySetAssociationsMixin<AttributeValueInstance, AttributeValueInstance['id']>;
  addAttributeValues: Sequelize.HasManyAddAssociationsMixin<AttributeValueInstance, AttributeValueInstance['id']>;
  addAttributeValue: Sequelize.HasManyAddAssociationMixin<AttributeValueInstance, AttributeValueInstance['id']>;
  createAttributeValue: Sequelize.HasManyCreateAssociationMixin<AttributeValueAttributes, AttributeValueInstance>;
  removeAttributeValue: Sequelize.HasManyRemoveAssociationMixin<AttributeValueInstance, AttributeValueInstance['id']>;
  removeAttributeValues: Sequelize.HasManyRemoveAssociationsMixin<AttributeValueInstance, AttributeValueInstance['id']>;
  hasAttributeValue: Sequelize.HasManyHasAssociationMixin<AttributeValueInstance, AttributeValueInstance['id']>;
  hasAttributeValues: Sequelize.HasManyHasAssociationsMixin<AttributeValueInstance, AttributeValueInstance['id']>;
  countAttributeValues: Sequelize.HasManyCountAssociationsMixin;
}

export const AttributeFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<AttributeInstance, AttributeAttributes> => {
  const attributes: SequelizeAttributes<AttributeAttributes> = {
    name: {
      type: DataTypes.STRING,
    },
  };

  const Attribute = sequelize.define<AttributeInstance, AttributeAttributes>('Attribute', attributes);

  Attribute.associate = (models) => {
    Attribute.hasMany(models.AttributeValue);
  };

  return Attribute;
};
