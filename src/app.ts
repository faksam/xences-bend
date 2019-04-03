import express from 'express';

const app = express();

app.use(express.static(`${__dirname}/dist`));

app.get('*', (req, res) => {
  res.send('Welcome to the xences application!!!');
});

export default app;
