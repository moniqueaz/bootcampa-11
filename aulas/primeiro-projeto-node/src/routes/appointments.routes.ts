import { Router } from 'express';
import { uuid } from 'uuidv4';

const appointmentRoutes = Router();

const appointments = [];

appointmentRoutes.post('/', (resquest, response) => {
  const { provider, date } = resquest.body;

  const appointment = {
    id: uuid(),
    provider,
    date,
  };

  appointments.push(appointment);

  return response.json(appointment);
});

export default appointmentRoutes;
