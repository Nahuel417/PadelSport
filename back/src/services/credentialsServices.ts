import ICredential from '../interfaces/ICredentials';

let credenciales: ICredential[] = [
    {
        id: 1,
        email: 'nahuel@gmail.com',
        password: 'nahuel123',
    },
    {
        id: 2,
        email: 'alejandro@gmail.com',
        password: 'alejandro123',
    },
];

let id = 3;

export const createCredentialService = async (email: string, password: string): Promise<number> => {
    try {
        const newCredentials: ICredential = {
            id,
            email,
            password,
        };
        id++;
        credenciales.push(newCredentials);

        return newCredentials.id;
    } catch (error) {
        console.log('Error en credentialsIdService: ', error);
        throw new Error('No se pueden mostrar el id de las credenciales.');
    }
};

export const validateCredentialService = async (email: string, password: string): Promise<number> => {
    const foundCredential = credenciales.find((cred) => {
        return cred.email == email;
    });

    if (!foundCredential) {
        throw Error('No existe el email.');
    } else if (foundCredential && foundCredential.password != password) {
        throw Error('La contraseña no coincide.');
    }

    return foundCredential.id;
};
