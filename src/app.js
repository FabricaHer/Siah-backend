import express, { json } from 'express';
import morgan from 'morgan';
import cors from 'cors'
import {errorLog,errorHandler,boomErrorHandler,ormErrorHandler} from './middleware/error.handler'
//Importing routes
import contratosRoutes from './routes/contratos.route';
import clientesRoutes from './routes/clientes.route';
import productosRoutes from './routes/productos.route';
import preciosRouter from './routes/precios.router';
import usuarioRouter from './routes/usuarios.router';


const app = express();

//middlewares
app.use(cors())
app.use(morgan('dev'));
app.use(json());
//routes
app.use('/api/contratos', contratosRoutes);
app.use('/api/clientes', clientesRoutes);
app.use('/api/productos', productosRoutes);
app.use('/api/precios',preciosRouter);
app.use('/api/usuario', usuarioRouter);

//middlewares de error
app.use(errorLog)
app.use(ormErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

export default app;