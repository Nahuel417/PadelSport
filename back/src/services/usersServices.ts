import { UserModel } from '../config/data-source';
import userDto from '../dto/userDto';
import { Credential } from '../entities/Credential';
import { User } from '../entities/User';
import { createCredentialService } from './credentialsServices';

export const registerUserService = async (usuario: userDto): Promise<User> => {
    const credenciales: Credential = await createCredentialService(usuario.email, usuario.password);

    const newUser: User = await UserModel.create({
        name: usuario.name,
        last_name: usuario.last_name,
        birthday: usuario.birthday,
        avatar: usuario.avatar,
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
    const user: User | null = await UserModel.findOneBy({ id });

    if (!user) throw Error('Usuario no encontrado');
    else return user;
};

export const deleteUserService = async (id: number): Promise<string> => {
    await UserModel.delete({ id });

    return `El usuario con id: ${id} fue eliminado con exito.`;
};
