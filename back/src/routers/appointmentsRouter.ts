import { Router } from 'express';
import { getAppointmentByIdController, getAppointmentsController, scheduleAppointmentsByIdController, cancelAppointmentsController } from '../controllers/appointmentsController';

const appointmentsRouter: Router = Router();

appointmentsRouter.get('/', getAppointmentsController);
appointmentsRouter.get('/:id', getAppointmentByIdController);

appointmentsRouter.post('/schedule', scheduleAppointmentsByIdController);

appointmentsRouter.put('/cancel', cancelAppointmentsController);

export default appointmentsRouter;
