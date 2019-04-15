import express from 'express';

import sequelizeConfig from './config/config';
import { createModels } from './models';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/dist`));

app.use('/', routes);

export default app;
