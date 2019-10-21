import { NextFunction, Request, Response } from 'express';
import sequelizeConfig from '../config/config';
import { createModels } from '../models';
import { UserRoleInstance } from '../models/UserRole';
import BaseCtrl from './base';

export default class UserRolesCtrl extends BaseCtrl {
  model = createModels(sequelizeConfig).UserRole;
}
