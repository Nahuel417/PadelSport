import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Credential } from './Credential';
import { Appointment } from './Appointment';

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    name: string;

    @Column({ length: 100 })
    last_name: string;

    @Column('date')
    birthday: string;

    @Column()
    avatar: string;

    @OneToOne(() => Credential)
    @JoinColumn()
    credentials: Credential;

    @OneToMany(() => Appointment, (appointment) => appointment.user)
    @JoinColumn()
    appointments: Appointment[];
}
