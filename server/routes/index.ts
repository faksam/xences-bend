import express from 'express';
import { Request, Response } from 'express';
import authRoute from './auth';
import usersRoute from './user';

const app = express.Router();
authRoute(app);
usersRoute(app);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the xences application!!!');
});

export default app;
