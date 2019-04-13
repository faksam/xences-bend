import BaseCtrl from './base';
import sequelizeConfig from '../config/config';
import { createModels } from '../models';

export default class UsersCtrl extends BaseCtrl {
  model = createModels(sequelizeConfig).User;
}
