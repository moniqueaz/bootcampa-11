import { Router } from 'express';
import appointmentRoutes from './appointments.routes';
import transactionsRoutes from './transactions.routes';

const routes = Router();

routes.use('/appointment', appointmentRoutes);
routes.use('/transactions', transactionsRoutes);

export default routes;
