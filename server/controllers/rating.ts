import { NextFunction, Request, Response } from 'express';
import sequelizeConfig from '../config/config';
import { createModels } from '../models';
import { RatingInstance } from '../models/Rating';
import BaseCtrl from './base';

export default class RatingsCtrl extends BaseCtrl {
  model = createModels(sequelizeConfig).Rating;
}
