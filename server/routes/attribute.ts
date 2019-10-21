import AttributesCtrl from '../controllers/attribute';

const AttributesController = new AttributesCtrl();

export default (app: any) => {
  app.get('/attributes', AttributesController.getAll);
  app.get('/attributes/count', AttributesController.count);
  app.get('/attributes/:id', AttributesController.get);
  app.put('/attributes/:id', AttributesController.update);
  app.delete('/attributes/:id', AttributesController.delete);
  app.post('/attributes', AttributesController.create);
};
