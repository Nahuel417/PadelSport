import { DataSource } from 'typeorm';
import { DATA_BASE, POSTGRES_PASS, POSTGRES_USERNAME } from './envs';
import { User } from '../entities/User';
import { Credential } from '../entities/Credential';
import { Appointment } from '../entities/Appointment';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: POSTGRES_USERNAME,
    password: POSTGRES_PASS,
    database: DATA_BASE,
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
