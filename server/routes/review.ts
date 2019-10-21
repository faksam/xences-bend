import ReviewsCtrl from '../controllers/review';

const ReviewsController = new ReviewsCtrl();

export default (app: any) => {
  app.get('/reviews', ReviewsController.getAll);
  app.get('/reviews/count', ReviewsController.count);
  app.get('/reviews/:id', ReviewsController.get);
  app.put('/reviews/:id', ReviewsController.update);
  app.delete('/reviews/:id', ReviewsController.delete);
  app.post('/reviews', ReviewsController.create);
};
