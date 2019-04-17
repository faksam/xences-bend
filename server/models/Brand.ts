import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';

export interface BrandAttributes {
  id?: number;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface BrandInstance extends Sequelize.Instance<BrandAttributes>, BrandAttributes {
}

export const BrandFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<BrandInstance, BrandAttributes> => {
  const attributes: SequelizeAttributes<BrandAttributes> = {
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
  };

  const Brand = sequelize.define<BrandInstance, BrandAttributes>('Brand', attributes);

  return Brand;
};
