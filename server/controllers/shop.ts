import { NextFunction, Request, Response } from 'express';
import sequelizeConfig from '../config/config';
import { createModels } from '../models';
import { ShopInstance } from '../models/Shop';
import BaseCtrl from './base';

export default class ShopsCtrl extends BaseCtrl {
  model = createModels(sequelizeConfig).Shop;
}
