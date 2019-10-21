import CategoriesCtrl from '../controllers/category';

const CategoriesController = new CategoriesCtrl();

export default (app: any) => {
  app.get('/categories', CategoriesController.getAll);
  app.get('/categories/count', CategoriesController.count);
  app.get('/categories/:id', CategoriesController.get);
  app.put('/categories/:id', CategoriesController.update);
  app.delete('/categories/:id', CategoriesController.delete);
  app.post('/categories', CategoriesController.create);
};
