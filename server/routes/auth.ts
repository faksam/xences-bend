import AuthController from '../controllers/auth';
import UserInputValidation from '../helpers/authValidation';
import verifyEmail from '../helpers/verifyEmail';
import verifyUserEmail from '../helpers/verifyUserEmail';

export default (app: any) => {
  app.post('/auth/signup', UserInputValidation.signUpInputValidation, verifyEmail, AuthController.signup);
  app.post('/auth/login', UserInputValidation.signInInputValidation, verifyUserEmail, AuthController.login);
};
