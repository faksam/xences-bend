import sequelizeConfig from '../config/config';
import { createModels } from '../models';
import BaseCtrl from './base';

export default class ProductsCtrl extends BaseCtrl {
  model = createModels(sequelizeConfig).Product;

}
