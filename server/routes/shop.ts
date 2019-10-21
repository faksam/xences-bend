import ShopsCtrl from '../controllers/shop';

const ShopsController = new ShopsCtrl();

export default (app: any) => {
  app.get('/shops', ShopsController.getAll);
  app.get('/shops/count', ShopsController.count);
  app.get('/shops/:id', ShopsController.get);
  app.put('/shops/:id', ShopsController.update);
  app.delete('/shops/:id', ShopsController.delete);
  app.post('/shops', ShopsController.create);
};
