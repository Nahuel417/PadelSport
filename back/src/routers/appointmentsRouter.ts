import { Router } from 'express';
import { getAppointmentById, getAppointments, scheduleAppointments, cancelAppointments } from '../controllers/appointmentsController';

const appointmentsRouter: Router = Router();

appointmentsRouter.get('/', getAppointments);
appointmentsRouter.get('/:id', getAppointmentById);

appointmentsRouter.post('/schedule', scheduleAppointments);

appointmentsRouter.put('/cancel', cancelAppointments);

export default appointmentsRouter;
