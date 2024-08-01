import { UserModel } from '../config/data-source';
import userDto from '../dto/userDto';
import { Credential } from '../entities/Credential';
import { User } from '../entities/User';
import { createCredentialService } from './credentialsServices';

export const registerUserService = async (usuario: userDto): Promise<User> => {
    const credenciales: Credential = await createCredentialService(usuario.email, usuario.password);
    const avatarDefault = 'https://w7.pngwing.com/pngs/627/693/png-transparent-computer-icons-user-user-icon-thumbnail.png';

    const newUser: User = await UserModel.create({
        name: usuario.name,
        last_name: usuario.last_name,
        birthday: usuario.birthday,
        avatar: avatarDefault,
        credentials: credenciales,
    });

    await UserModel.save(newUser);

    return newUser;
};

export const getUsersService = async (): Promise<User[]> => {
    const allUsers = await UserModel.find({
        relations: ['credentials'],
        select: { credentials: { email: true, password: true } },
    });

    return allUsers;
};

export const getUserByIdService = async (id: number): Promise<User> => {
    const user: User | null = await UserModel.findOne({
        where: { id },
        relations: ['credentials', 'appointments'],
        select: {
            id: true,
            name: true,
            last_name: true,
            birthday: true,
            avatar: true,
            credentials: { email: true, password: true },
        },
        order: {
            appointments: {
                id: 'ASC', // Ordena las turnos en orden ascendente
            },
        },
    });

    if (!user) throw Error('Usuario no encontrado');
    else return user;
};

export const deleteUserService = async (id: number): Promise<string> => {
    await UserModel.delete({ id });

    return `El usuario con id: ${id} fue eliminado con exito.`;
};
