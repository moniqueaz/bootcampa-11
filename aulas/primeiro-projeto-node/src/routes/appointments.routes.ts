import { Router } from 'express';
import { parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointementService';

const appointmentRoutes = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentRoutes.post('/', (request, response) => {
  try {
    const { provider, date } = request.body;

    const parseDate = parseISO(date);

    const createAppointment = new CreateAppointmentService(
      appointmentsRepository,
    );

    return response.json(
      createAppointment.execute({ provider, date: parseDate }),
    );
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

appointmentRoutes.get('/', (request, response) => {
  response.status(200).json(appointmentsRepository.all());
});

export default appointmentRoutes;
