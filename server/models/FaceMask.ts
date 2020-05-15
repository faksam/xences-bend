import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';

export interface FaceMaskAttributes {
  id?: number;
  quantity: number;
  color: string;
  type: string;
  design: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface FaceMaskInstance extends Sequelize.Instance<FaceMaskAttributes>, FaceMaskAttributes {
}

export const FaceMaskFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<FaceMaskInstance, FaceMaskAttributes> => {
  const attributes: SequelizeAttributes<FaceMaskAttributes> = {
    quantity: { type: DataTypes.INTEGER },
    color: { type: DataTypes.STRING },
    type: { type: DataTypes.STRING },
    design: { type: DataTypes.STRING },
    name: { type: DataTypes.STRING },
    email: { type: DataTypes.STRING },
    phone: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
  };

  const FaceMask = sequelize.define<FaceMaskInstance, FaceMaskAttributes>('FaceMask', attributes);

  return FaceMask;
};
