import userDto from '../dto/userDto';
import IUser from '../interfaces/IUsers';
import { credentialsIdService } from './credentialsServices';

let users: IUser[] = [
    {
        id: 1,
        name: 'nahuel',
        last_name: 'banco',
        credentialsId: 1,
        date: '2000-07-19',
        avatar: 'data:image/jpeg;base64,/9j/4AAQS',
    },
    {
        id: 2,
        name: 'nahuel2',
        last_name: 'banco',
        credentialsId: 2,
        date: '2000-07-19',
        avatar: 'data:image/jpeg;base64,/9j/4AAQS',
    },
];

let id: number = 3;

export const getUsersService = async (): Promise<IUser[]> => {
    try {
        return users;
    } catch (error) {
        console.log('Error en getUsersService: ', error);
        throw new Error('No se pueden mostrar todos los usuarios');
    }
};

export const getUserByIdService = async (id: number): Promise<IUser[] | string> => {
    try {
        const user = users.filter((user: IUser) => user.id === id);

        if (user.length == 0) return 'Usuario no encontrado';
        else return user;
    } catch (error) {
        console.log('Error en getUserByIdService: ', error);
        throw new Error('No se pudo encontrar el usuario');
    }
};

export const registerUserService = async (usuario: userDto): Promise<IUser> => {
    try {
        const credencialesId = await credentialsIdService(usuario.email, usuario.password);

        const newUser: IUser = {
            id,
            name: usuario.name,
            last_name: usuario.last_name,
            credentialsId: credencialesId,
            date: usuario.date,
            avatar: usuario.avatar,
        };
        id++;

        users.push(newUser);

        return newUser;
    } catch (error) {
        console.log('Error en registerUserService: ', error);
        throw new Error('No se pudo registrar el usuario');
    }
};

export const loginUserService = async () => {};

export const deleteUserService = async (id: number): Promise<IUser[]> => {
    try {
        users = users.filter((user: IUser) => user.id !== id);

        return users;
    } catch (error) {
        console.log('Error en deleteUserService: ', error);
        throw new Error('No se pudo eliminar el usuario');
    }
};
