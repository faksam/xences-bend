import { Request, Response, NextFunction } from 'express';
import BaseCtrl from './base';
import sequelizeConfig from '../config/config';
import { createModels } from '../models';

export default class UsersCtrl extends BaseCtrl {
  model = createModels(sequelizeConfig).User;

  getUserByEmail = (req: Request, res: Response) => {
    this.model.findOne({
      where: {
        email: req.query.email
      }
    })
      .then((user) => {
        res.status(200).send({
          success: true,
          status: 200,
          data: user,
        });
      });
  };
}
