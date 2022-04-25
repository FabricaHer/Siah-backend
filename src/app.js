import express, { json } from 'express';
import morgan from 'morgan';

//Importing routes
import contratosRoutes from './routes/contratos.route';
// import taskRoutes from './routes/tasks';
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(json());
//routes
app.use('/api/contratos', contratosRoutes);
// app.use('/api/tasks', taskRoutes);
export default app;