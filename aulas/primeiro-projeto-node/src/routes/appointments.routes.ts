import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

const appointmentRoutes = Router();

const appointments: Appointment[] = [];

appointmentRoutes.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parseDate = startOfHour(parseISO(date));

  const findAppointmentInSamDate = appointments.find((appointment) => {
    return isEqual(parseDate, appointment.date);
  });

  if (findAppointmentInSamDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  const appointment = new Appointment(provider, parseDate);

  appointments.push(appointment);

  return response.json(appointment);
});

appointmentRoutes.get('/', (request, response) => {
  response.status(200).json(appointments);
});

export default appointmentRoutes;
