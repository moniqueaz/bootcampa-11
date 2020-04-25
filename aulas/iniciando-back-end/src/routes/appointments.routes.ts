import { Router } from 'express';
import { parseISO } from 'date-fns';
import { getCustomRepository } from 'typeorm';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointementService';

const appointmentRoutes = Router();

appointmentRoutes.post('/', async (request, response) => {
  try {
    const { provider, date } = request.body;

    const parseDate = parseISO(date);

    const createAppointment = new CreateAppointmentService();

    return response
      .status(201)
      .json(await createAppointment.execute({ provider, date: parseDate }));
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

appointmentRoutes.get('/', async (request, response) => {
  const appointmentsRepository = getCustomRepository(AppointmentsRepository);
  response.status(200).json(await appointmentsRepository.find());
});

export default appointmentRoutes;
