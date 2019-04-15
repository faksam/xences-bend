import jwt from 'jwt-simple';
import bcrypt from 'bcrypt';
import { Request, Response } from 'express';
import sequelizeConfig from '../config/config';
import { createModels } from '../models';


/**
   * @description - Create Token
   * @static
   *
   * @param {object} user - User Object
   *
   * @returns {object} Encoded token
   */
const tokenForUser = (user: any) => {
  const timestamp = new Date().getTime();
  return jwt.encode({
    email: user.email, role: user.role, id: user.id, iat: timestamp,
  }, process.env.SECRET_TOKEN);
};

const User = createModels(sequelizeConfig).User;

let userToken: any;
/**
 * @description - Signup a new user
 * @static
 *
 * @param {object} req - HTTP Request
 * @param {object} res - HTTP Response
 *
 * @memberOf authController
 *
 * @returns {object} response HTTP Response JSON Object
 */
const signup = (req: Request, res: Response) => {
  const {
    email, password,
  } = req.body;

  const saltRounds = 12;

  bcrypt.hash(password, saltRounds)
    .then((hash) => {
      const newUser: any = Object.assign({}, req.body, {
        email: email.toLowerCase(),
        password: hash,
      });

      User.create(newUser)
        .then((user: any) => {
          userToken = tokenForUser(user);
          res.set('authorization', userToken).status(201).send({
            success: true,
            status: 201,
            token: userToken,
            data: {
              fullName: user.fullname,
              email: user.email,
              role: user.role,
            },
          });
        });
    });
};
/**
 * @description - Login a new user
 * @static
 *
 * @param {object} req - HTTP Request
 * @param {object} res - HTTP Response
 *
 * @memberOf authController
 * @returns {object} response HTTP Response JSON Object
 */
const login = (req: Request, res: Response) => {
  const {
    email, password,
  } = req.body;
  const userEmail = email.toLowerCase();
  User.findOne({
    where: {
      email: userEmail
    }
  })
    .then((user) => {
      if (user && user.password) {
        bcrypt.compare(password, user.password)
          .then((validPassword) => {
            if (validPassword) {
              userToken = tokenForUser(user);
              res.set('authorization', userToken).status(200).send({
                success: true,
                status: 200,
                token: userToken,
                data: {
                  fullName: user.fullname,
                  email: user.email,
                  role: user.role,
                },
              });
            }
            else {
              res.status(400).send({
                success: false,
                status: 400,
                error: {
                  message: 'Invalid Email or Password.',
                }
              });
            }
          });
      }
    });
  }

  export default { signup, login };
