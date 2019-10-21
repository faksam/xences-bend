import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/dist`));

app.use('/', routes);

export default app;
