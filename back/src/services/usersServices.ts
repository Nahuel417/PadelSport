import userDto from '../dto/userDto';
import IUser from '../interfaces/IUsers';
import { createCredentialService } from './credentialsServices';

let users: IUser[] = [
    {
        id: 1,
        name: 'nahuel',
        last_name: 'banco',
        credentialsId: 1,
        birthday: '2000-07-19',
        avatar: 'data:image/jpeg;base64,/9j/4AAQS',
    },
    {
        id: 2,
        name: 'nahuel2',
        last_name: 'banco',
        credentialsId: 2,
        birthday: '2000-07-19',
        avatar: 'data:image/jpeg;base64,/9j/4AAQS',
    },
];

let id: number = 3;

export const getUsersService = async (): Promise<IUser[]> => {
    try {
        const allUsers: IUser[] = users;
        return allUsers;
    } catch (error) {
        console.log('Error en getUsersService: ', error);
        throw new Error('No se pueden mostrar todos los usuarios');
    }
};

export const getUserByIdService = async (id: number): Promise<IUser[]> => {
    const user = users.filter((user: IUser) => user.id === id);

    if (user.length == 0) throw Error('Usuario no encontrado');
    else return user;
};

export const registerUserService = async (usuario: userDto): Promise<IUser> => {
    try {
        const credencialesId = await createCredentialService(usuario.email, usuario.password);

        const newUser: IUser = {
            id,
            name: usuario.name,
            last_name: usuario.last_name,
            credentialsId: credencialesId,
            birthday: usuario.birthday,
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

export const deleteUserService = async (id: number): Promise<IUser[]> => {
    try {
        users = users.filter((user: IUser) => user.id !== id);

        return users;
    } catch (error) {
        console.log('Error en deleteUserService: ', error);
        throw new Error('No se pudo eliminar el usuario');
    }
};
