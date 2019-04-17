import * as Sequelize from 'sequelize';
import { SequelizeAttributes } from '../typings/SequelizeAttributes';
import { UserAttributes, UserInstance } from './User';

export interface UserRoleAttributes {
  id?: number;
  name: string;
  description: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserRoleInstance extends Sequelize.Instance<UserRoleAttributes>, UserRoleAttributes {
  // user
  getUser: Sequelize.BelongsToGetAssociationMixin<UserInstance>;
  setUser: Sequelize.BelongsToSetAssociationMixin<UserInstance, UserInstance['id']>;
  createUser: Sequelize.BelongsToCreateAssociationMixin<UserAttributes, UserInstance['id']>;
}

export const UserRoleFactory = (
  sequelize: Sequelize.Sequelize,
  DataTypes: Sequelize.DataTypes
): Sequelize.Model<UserRoleInstance, UserRoleAttributes> => {
  const attributes: SequelizeAttributes<UserRoleAttributes> = {
    name: { type: DataTypes.STRING },
    description: { type: DataTypes.STRING },
  };

  const UserRole = sequelize.define<UserRoleInstance, UserRoleAttributes>('UserRole', attributes);

  return UserRole;
};
