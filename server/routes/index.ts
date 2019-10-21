import { Request, Response, Router } from 'express';
import authRoute from './auth';
import attributesRoute from './attribute';
import brandsRoute from './brand';
import categoriesRoute from './category';
import ordersRoute from './order';
import ratingsRoute from './rating';
import reviewsRoute from './review';
import shopsRoute from './shop';
import userRolesRoute from './userRole';
import productsRoute from './product';
import usersRoute from './user';

const app = Router();
authRoute(app);
usersRoute(app);
productsRoute(app);
attributesRoute(app);
brandsRoute(app);
categoriesRoute(app);
ordersRoute(app);
ratingsRoute(app);
reviewsRoute(app);
shopsRoute(app);
userRolesRoute(app);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the xences application!!!');
});

export default app;
