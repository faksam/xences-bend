import express from 'express';

import sequelizeConfig from './config/config';
import { createModels } from './models';
import routes from './routes';

const app = express();

const db = createModels(sequelizeConfig);
db.sequelize.sync(); // tells Sequelize to sync all defined models to db

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/dist`));

app.use('/', routes);

export default app;
