import { NextFunction, Request, Response } from 'express';
import sequelizeConfig from '../config/config';
import { createModels } from '../models';
import { OrderInstance } from '../models/Order';
import BaseCtrl from './base';

export default class OrdersCtrl extends BaseCtrl {
  model = createModels(sequelizeConfig).Order;
}
