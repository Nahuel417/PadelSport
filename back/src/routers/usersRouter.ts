import { Router } from 'express';
import { getUsersController, registerUserController, loginUserController, deleteUserController, getUserByIdController } from '../controllers/usersController';
import { validarCredenciales } from '../middlewares/validarCredenciales';
import { validarRegistro } from '../middlewares/validarRegistro';

const usersRouter: Router = Router();

usersRouter.get('/', getUsersController);
usersRouter.get('/:id', getUserByIdController);

usersRouter.post('/register', validarRegistro, registerUserController);
usersRouter.post('/login', validarCredenciales, loginUserController);

usersRouter.delete('/', deleteUserController);

export default usersRouter;
