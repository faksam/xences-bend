import RatingsCtrl from '../controllers/rating';

const RatingsController = new RatingsCtrl();

export default (app: any) => {
  app.get('/ratings', RatingsController.getAll);
  app.get('/ratings/count', RatingsController.count);
  app.get('/ratings/:id', RatingsController.get);
  app.put('/ratings/:id', RatingsController.update);
  app.delete('/ratings/:id', RatingsController.delete);
  app.post('/ratings', RatingsController.create);
};
