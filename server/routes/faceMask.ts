import FaceMasksCtrl from '../controllers/faceMask';

const FaceMasksController = new FaceMasksCtrl();

export default (app: any) => {
  app.get('/faceMasks', FaceMasksController.getAll);
  app.get('/faceMasks/count', FaceMasksController.count);
  app.get('/faceMasks/:id', FaceMasksController.get);
  app.put('/faceMasks/:id', FaceMasksController.update);
  app.delete('/faceMasks/:id', FaceMasksController.delete);
  app.post('/faceMasks', FaceMasksController.create);
};
