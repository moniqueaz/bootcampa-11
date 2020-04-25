import { Router } from 'express';
import appointmentRoutes from './appointments.routes';
import transactionsRoutes from './transactions.routes';
import usersRoutes from './users.routes';

const routes = Router();

routes.use('/appointment', appointmentRoutes);
routes.use('/transactions', transactionsRoutes);
routes.use('/users', usersRoutes);

export default routes;
