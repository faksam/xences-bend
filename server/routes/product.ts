import ProductsCtrl from '../controllers/products';

const ProductsController = new ProductsCtrl();

export default (app: any) => {
  app.get('/products', ProductsController.getAll);
  app.get('/products/count', ProductsController.count);
  app.get('/products/:id', ProductsController.get);
  app.put('/products/:id', ProductsController.update);
  app.delete('/products/:id', ProductsController.delete);
  app.post('/products', ProductsController.create);
};
