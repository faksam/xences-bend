import { NextFunction, Request, Response } from 'express';
import sequelizeConfig from '../config/config';
import { createModels } from '../models';

const User = createModels(sequelizeConfig).User;

export const verifyEmail = (req: Request, res: Response, next: NextFunction) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((foundUser) => {
    if (foundUser) {
      return res.status(409).send({
        success: false,
        status: 409,
        error: {
          message: 'User with this email already exist',
        },
      });
    }
    return next();
  });
};

export default verifyEmail;
