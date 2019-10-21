import UserRolesCtrl from '../controllers/userRole';

const UserRolesController = new UserRolesCtrl();

export default (app: any) => {
  app.get('/user-roles', UserRolesController.getAll);
  app.get('/user-roles/count', UserRolesController.count);
  app.get('/user-roles/:id', UserRolesController.get);
  app.put('/user-roles/:id', UserRolesController.update);
  app.delete('/user-roles/:id', UserRolesController.delete);
  app.post('/user-roles', UserRolesController.create);
};
