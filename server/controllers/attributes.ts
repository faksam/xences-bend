import sequelizeConfig from '../config/config';
import { createModels } from '../models';
import BaseCtrl from './base';

export default class AttributesCtrl extends BaseCtrl {
  model = createModels(sequelizeConfig).Attribute;
}
