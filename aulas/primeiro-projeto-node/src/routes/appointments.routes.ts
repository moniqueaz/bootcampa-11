import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentRoutes = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentRoutes.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parseDate = startOfHour(parseISO(date));

  if (appointmentsRepository.findByDate(parseDate)) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  const appointment = appointmentsRepository.create({
    provider,
    date: parseDate,
  });

  return response.json(appointment);
});

appointmentRoutes.get('/', (request, response) => {
  response.status(200).json(appointmentsRepository.all());
});

export default appointmentRoutes;
