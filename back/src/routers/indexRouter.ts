import { Router } from 'express';
const indexRouter: Router = Router();

//*  Rutas  //
// users
import usersRouter from './usersRouter';
indexRouter.use('/users', usersRouter);

// appointments
import appointmentsRouter from './appointmentsRouter';
indexRouter.use('/appointments', appointmentsRouter);

export default indexRouter;
