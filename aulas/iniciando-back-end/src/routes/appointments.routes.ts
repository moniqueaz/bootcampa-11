import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointementService';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const appointmentRoutes = Router();

appointmentRoutes.use(ensureAuthenticated);

appointmentRoutes.post('/', async (request, response) => {
  try {
    const { provider_id, date } = request.body;

    const parseDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    return response
      .status(201)
      .json(await createAppointment.execute({ provider_id, date: parseDate }));
  } catch (error) {
    return response.status(error.statusCode).json({ error: error.message });
  }
});

appointmentRoutes.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  response.status(200).json(await appointmentsRepository.find());
});

export default appointmentRoutes;
