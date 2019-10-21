import { NextFunction, Request, Response } from 'express';
import sequelizeConfig from '../config/config';
import { createModels } from '../models';
import { ReviewInstance } from '../models/Review';
import BaseCtrl from './base';

export default class ReviewsCtrl extends BaseCtrl {
  model = createModels(sequelizeConfig).Review;
}
