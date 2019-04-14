import UsersCtrl from '../controllers/users';

const UsersController = new UsersCtrl();

export default (app: any) => {
  app.get('/users', UsersController.getAll);
  app.get('/users/count', UsersController.count);
  app.get('/users/:id', UsersController.verifyID, UsersController.get);
  app.put('/users/:id', UsersController.verifyID, UsersController.update);
  app.delete('/users/:id', UsersController.verifyID, UsersController.delete);
  app.post('/users', UsersController.insert);
};
