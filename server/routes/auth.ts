import AuthController from '../controllers/auth';
import verifyEmail from '../helpers/verifyEmail';
import verifyUserEmail from '../helpers/verifyUserEmail';
import UserInputValidation from '../helpers/authValidation';

export default (app: any) => {
  app.post('/auth/signup', UserInputValidation.signUpInputValidation, verifyEmail, AuthController.signup);
  app.post('/auth/login', UserInputValidation.signInInputValidation, verifyUserEmail, AuthController.login);
};
