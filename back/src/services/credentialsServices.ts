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

export const credentialsIdService = async (email: string, password: string): Promise<number> => {
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

export const validateCredentialsService = async (email: string, password: string): Promise<number | string> => {
    try {
        const credentials = credenciales.find((cred) => {
            return cred.email == email && cred.password == password;
        });

        return credentials ? credentials.id : 'Credenciales invalidas';
    } catch (error) {
        console.log('Error en validateCredentialsService: ', error);
        throw new Error('No se pudo validar los datos.');
    }
};
