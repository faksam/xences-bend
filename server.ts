import dotenv from 'dotenv';
import app from './server/app'

const port = 3000; 

dotenv.config();

app.listen(process.env.PORT || port);
