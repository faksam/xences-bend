import { Request, Response, Router } from 'express';
import attributesRoute from './attribute';
import authRoute from './auth';
import productsRoute from './product';
import usersRoute from './user';

const app = Router();
authRoute(app);
usersRoute(app);
attributesRoute(app);
productsRoute(app);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the xences application!!!');
});

export default app;
