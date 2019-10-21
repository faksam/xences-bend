import { NextFunction, Request, Response } from 'express';
import sequelizeConfig from '../config/config';
import { createModels } from '../models';
import { AttributeInstance } from '../models/Attribute';
import BaseCtrl from './base';

export default class AttributesCtrl extends BaseCtrl {
  model = createModels(sequelizeConfig).Attribute;
}
