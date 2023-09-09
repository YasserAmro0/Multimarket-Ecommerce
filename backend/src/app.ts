import dotenv from 'dotenv';
import express from 'express';
import bearerToken from 'express-bearer-token';
import morgan from 'morgan';
import cors from 'cors';
import { clientError, serverError } from './middlewares';
import router from './routes';

dotenv.config();
const app = express();
app.use([
    cors(),
    express.json(),
    express.urlencoded({ extended: true }),
]);
app.use(bearerToken());
app.use(morgan('dev'));
app.use('/api/v1', router);
app.use(clientError);
app.use(serverError);


export default app;