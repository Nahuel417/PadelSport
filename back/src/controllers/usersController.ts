import { Request, Response } from 'express';
import { deleteUserService, getUserByIdService, getUsersService, registerUserService } from '../services/usersServices';
import { validateCredentialService } from '../services/credentialsServices';
import { User } from '../entities/User';

// Registro de un nuevo usuario
export const registerUserController = async (req: Request, res: Response) => {
    try {
        const newUser: User = await registerUserService(req.body);
        res.status(200).json(newUser);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener el listado de todos los usuarios
export const getUsersController = async (req: Request, res: Response) => {
    try {
        const users: User[] = await getUsersService();
        res.status(201).json(users);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Obtener el detalle de un usuario específico
export const getUserByIdController = async (req: Request, res: Response) => {
    try {
        const user: User = await getUserByIdService(+req.params.id);
        res.status(200).json(user);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Login de un usuario
export const loginUserController = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;
        const credenciales = await validateCredentialService(email, password);
        res.status(200).json(credenciales);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};

// Eliminar un usuario
export const deleteUserController = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        const deleteUser: string = await deleteUserService(id);
        res.status(200).json(deleteUser);
    } catch (error: any) {
        res.status(400).json({ error: error.message });
    }
};
