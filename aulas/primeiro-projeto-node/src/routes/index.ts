import { Router } from 'express';
import appointmentRoutes from './appointments.routes';

const routes = Router();

routes.use('/appointment', appointmentRoutes);

export default routes;
