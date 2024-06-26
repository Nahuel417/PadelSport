import { Router } from 'express';
import { getUsersController, registerUserController, loginUserController, deleteUserController, getUserByIdController } from '../controllers/usersController';
import { authMiddleware } from '../middlewares/authMiddleware';

const usersRouter: Router = Router();

usersRouter.get('/', getUsersController);
usersRouter.get('/:id', getUserByIdController);

usersRouter.post('/register', registerUserController);
usersRouter.post('/login', loginUserController);

usersRouter.delete('/', deleteUserController);

export default usersRouter;
