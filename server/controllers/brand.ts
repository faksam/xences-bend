import { NextFunction, Request, Response } from 'express';
import sequelizeConfig from '../config/config';
import { createModels } from '../models';
import { BrandInstance } from '../models/Brand';
import BaseCtrl from './base';

export default class BrandsCtrl extends BaseCtrl {
  model = createModels(sequelizeConfig).Brand;
}
