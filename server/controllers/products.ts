import { NextFunction, Request, Response } from 'express';
import sequelizeConfig from '../config/config';
import { createModels } from '../models';
import { ProductInstance } from '../models/Product';
import BaseCtrl from './base';

export default class ProductsCtrl extends BaseCtrl {
  model = createModels(sequelizeConfig).Product;

}
