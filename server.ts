import app from './src/app'

const port = 3000; // default port to listen

app.listen(process.env.PORT || port);
