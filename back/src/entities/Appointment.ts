import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity('appointments')
export class Appointment {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 20 })
    asunto: string;

    @Column({ length: 20 })
    dia: string;

    @Column('time')
    horario: string;

    @Column({ length: 20 })
    cancha: string;

    @Column({ length: 20, nullable: true })
    entrenador: string;

    @Column({ length: 20 })
    status: 'active' | 'canceled';

    @ManyToOne(() => User, (user) => user.appointments)
    user: User;
}
