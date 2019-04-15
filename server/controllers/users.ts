import { NextFunction, Request, Response } from 'express';
import sequelizeConfig from '../config/config';
import { createModels } from '../models';
import { UserInstance } from '../models/User';
import BaseCtrl from './base';

export default class UsersCtrl extends BaseCtrl {
  model = createModels(sequelizeConfig).User;

  getUserByEmail = (req: Request, res: Response) => {
    this.model.findOne({
      where: {
        email: req.query.email,
      },
    })
      .then((user: UserInstance) => {
        res.status(200).send({
          success: true,
          status: 200,
          data: user,
        });
      });
  }
}
