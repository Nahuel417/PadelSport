import { CredentialModel } from '../config/data-source';
import { Credential } from '../entities/Credential';

export const createCredentialService = async (email: string, password: string): Promise<Credential> => {
    const newCredentials = await CredentialModel.create({ email, password });
    await CredentialModel.save(newCredentials);

    return newCredentials;
};

export const validateCredentialService = async (email: string, password: string): Promise<string> => {
    const foundCredentialEmail: Credential | null = await CredentialModel.findOne({ where: { email: email } });

    if (!foundCredentialEmail) {
        throw Error('No existe el email.');
    }

    const foundCredentials: Credential | null = await CredentialModel.findOne({ where: { email: email, password: password } });
    if (!foundCredentials) {
        throw Error('Las credenciales son invalidas.');
    }

    return 'Usuario logeado correctamente!';
};
