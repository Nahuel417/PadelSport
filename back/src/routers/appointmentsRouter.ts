import { Router } from 'express';
import { getAppointmentByIdController, getAppointmentsController, scheduleAppointmentsController, cancelAppointmentsController } from '../controllers/appointmentsController';

const appointmentsRouter: Router = Router();

appointmentsRouter.get('/', getAppointmentsController);
appointmentsRouter.get('/:id', getAppointmentByIdController);

appointmentsRouter.post('/schedule', scheduleAppointmentsController);

appointmentsRouter.put('/cancel', cancelAppointmentsController);

export default appointmentsRouter;
