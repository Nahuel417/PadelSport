import { DataSource } from 'typeorm';
import { POSTGRES_PASS } from './envs';
import { User } from '../entities/User';
import { Credential } from '../entities/Credential';
import { Appointment } from '../entities/Appointment';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: POSTGRES_PASS,
    database: 'demo',
    // dropSchema: true,
    synchronize: true,
    logging: false,
    entities: [User, Credential, Appointment],
    subscribers: [],
    migrations: [],
});

export const UserModel = AppDataSource.getRepository(User);

export const AppointmentsModel = AppDataSource.getRepository(Appointment);

export const CredentialModel = AppDataSource.getRepository(Credential);
