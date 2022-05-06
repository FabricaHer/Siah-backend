import express, { json } from 'express';
import morgan from 'morgan';
import {errorLog,errorHandler,boomErrorHandler} from './middleware/error.handler'
//Importing routes
import contratosRoutes from './routes/contratos.route';
import preciosRouter from './routes/precios.router';


const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());
//routes
app.use('/api/contratos', contratosRoutes);
app.use('/api/precios',preciosRouter)

app.use(errorLog)
app.use(boomErrorHandler)
app.use(errorHandler)

export default app;