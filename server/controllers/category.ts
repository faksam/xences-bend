import { NextFunction, Request, Response } from 'express';
import sequelizeConfig from '../config/config';
import { createModels } from '../models';
import { CategoryInstance } from '../models/Category';
import BaseCtrl from './base';

export default class CategorysCtrl extends BaseCtrl {
  model = createModels(sequelizeConfig).Category;
}
