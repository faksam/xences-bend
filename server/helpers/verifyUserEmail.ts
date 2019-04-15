import { NextFunction, Request, Response } from 'express';
import sequelizeConfig from '../config/config';
import { createModels } from '../models';

const User = createModels(sequelizeConfig).User;

export const verifyUserEmail = (req: Request, res: Response, next: NextFunction) => {
  const email = req.body.email || req.query.email;
  User.findOne({
    where: {
      email,
    },
  }).then((foundUser) => {
    if (foundUser) { return next(); }

    return res.status(400).send({
      success: false,
      status: 400,
      error: {
        message: 'User email not found',
      },
    });

  });
};

export default verifyUserEmail;
