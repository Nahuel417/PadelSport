import { Request, Response } from 'express';
import IUser from '../interfaces/IUsers';
import { deleteUserService, getUserByIdService, getUsersService, registerUserService } from '../services/usersServices';

export const getUsersController = async (req: Request, res: Response) => {
    const users: IUser[] = await getUsersService();
    res.status(201).json(users);
    // res.json('Obtener el listado de todos los usuarios.');
};

export const getUserByIdController = async (req: Request, res: Response) => {
    const user: IUser[] | string = await getUserByIdService(+req.params.id);
    res.status(200).json(user);
    // res.json('Obtener el detalle de un usuario específico.');
};

export const registerUserController = async (req: Request, res: Response) => {
    const newUser: IUser = await registerUserService(req.body);
    res.status(200).json(newUser);
    // res.json('Registro de un nuevo usuario.');
};

export const loginUserController = (req: Request, res: Response) => {
    res.json('Login del usuario a la aplicación.');
};

export const deleteUserController = async (req: Request, res: Response) => {
    const { id } = req.body;
    const users: IUser[] = await deleteUserService(id);
    res.status(200).json({ message: `El usuario con id: ${id} fue eliminado con exito`, ListaUsuarios: users });
    // res.json('delete por controller');
};
