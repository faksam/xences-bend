import { NextFunction, Request, Response } from 'express';
import sequelizeConfig from '../config/config';
import { createModels } from '../models';
import { FaceMaskInstance } from '../models/FaceMask';
import BaseCtrl from './base';

export default class FaceMasksCtrl extends BaseCtrl {
  model = createModels(sequelizeConfig).FaceMask;
}
