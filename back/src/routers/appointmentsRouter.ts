import { Router } from 'express';
import { getAppointmentById, getAppointments, scheduleAppointments, cancelAppointments } from '../controllers/appointmentsController';
import { validarAppointment } from '../middlewares/validarAppointment';

const appointmentsRouter: Router = Router();

appointmentsRouter.get('/', getAppointments);
appointmentsRouter.get('/:id', getAppointmentById);

appointmentsRouter.post('/schedule', validarAppointment, scheduleAppointments);

appointmentsRouter.put('/cancel/:id', cancelAppointments);

export default appointmentsRouter;
