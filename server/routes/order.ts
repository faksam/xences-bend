import OrdersCtrl from '../controllers/order';

const OrdersController = new OrdersCtrl();

export default (app: any) => {
  app.get('/orders', OrdersController.getAll);
  app.get('/orders/count', OrdersController.count);
  app.get('/orders/:id', OrdersController.get);
  app.put('/orders/:id', OrdersController.update);
  app.delete('/orders/:id', OrdersController.delete);
  app.post('/orders', OrdersController.create);
};
