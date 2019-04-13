import express from 'express';

import sequelizeConfig from './config/config';
import { createModels } from './models';
import { UserInstance } from './models/User';

const app = express();

const db = createModels(sequelizeConfig);
db.sequelize.sync(); // tells Sequelize to sync all defined models to db

app.use(express.static(`${__dirname}/dist`));

app.get('/users', (req, res) => {
  db.User.findAll()
    .then((users: UserInstance[]) => res.status(200).json({ users }))
    .catch(err => res.status(500).json({ err: ['oops', err] }));
});

app.get('/', (req, res) => {
  res.send('Welcome to the xences application!!!');
});

export default app;
