import { Request, Response, NextFunction } from 'express';
import Validator from 'validatorjs';


/**
 * @class UserInputValidation
 */
class UserInputValidation {
  /**
   * validate user input on signIn
   *
   * @param {object} formInput
   *
   * @returns {boolean} true
   * @returns {object} errors
   */
  static signInInputValidation(req: Request, res: Response, next: NextFunction) {
    const {
      email, password
    } = req.body;

    const validation = new Validator(
      {
        email,
        password
      },
      {
        email: 'required|string|email',
        password: 'required|min:8|max:40',
      },
    );

    if (validation.passes()) {
      return next();
    }
    else  {
      const errors = validation.errors.all();
      return res.status(400).send({
        success: false,
        status: 400,
        errors,
      });
    }
  }

  /**
   * validate user input on signUp
   *
   * @param {object} formInput
   *
   * @returns {boolean} true
   * @returns {object} errors
   */
  static signUpInputValidation(req: Request, res: Response, next: NextFunction) {
    const {
      fullname, email, password, password_confirmation, phone, address, role 
    } = req.body;

    const validation = new Validator(
      {
        fullname,
        email,
        password,
        password_confirmation,
        phone,
        address,
        role,
      },
      {
        fullname: 'required|string|min:2|max:40',
        email: 'required|string|email',
        password: 'required|min:8|max:40|confirmed',
        password_confirmation: 'required',
        phone: 'string|max:40',
        address: 'string|max:80',
        role: 'string|max:40',
      },
    );

    if (validation.passes()) {
      return next();
    }
    else  {
      const errors = validation.errors.all();
      return res.status(400).send({
        success: false,
        status: 400,
        errors,
      });
    }
  }
}

export default UserInputValidation;
