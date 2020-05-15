import { Request, Response, Router } from 'express';
import attributesRoute from './attribute';
import authRoute from './auth';
import brandsRoute from './brand';
import categoriesRoute from './category';
import faceMaskRoute from './faceMask';
import ordersRoute from './order';
import productsRoute from './product';
import ratingsRoute from './rating';
import reviewsRoute from './review';
import shopsRoute from './shop';
import usersRoute from './user';
import userRolesRoute from './userRole';

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
faceMaskRoute(app);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the xences application!!!');
});

export default app;
