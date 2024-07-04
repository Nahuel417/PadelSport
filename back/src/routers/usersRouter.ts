import { Router } from 'express';
import { getUsersController, registerUserController, loginUserController, deleteUserController, getUserByIdController } from '../controllers/usersController';
import { validarCredenciales } from '../middlewares/validarCredenciales';

const usersRouter: Router = Router();

usersRouter.get('/', getUsersController);
usersRouter.get('/:id', getUserByIdController);

usersRouter.post('/register', registerUserController);
usersRouter.post('/login', validarCredenciales, loginUserController);

usersRouter.delete('/', deleteUserController);

export default usersRouter;
