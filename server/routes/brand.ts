import BrandsCtrl from '../controllers/brand';

const BrandsController = new BrandsCtrl();

export default (app: any) => {
  app.get('/brands', BrandsController.getAll);
  app.get('/brands/count', BrandsController.count);
  app.get('/brands/:id', BrandsController.get);
  app.put('/brands/:id', BrandsController.update);
  app.delete('/brands/:id', BrandsController.delete);
  app.post('/brands', BrandsController.create);
};
