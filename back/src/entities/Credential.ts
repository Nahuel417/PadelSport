import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity('credentials')
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @OneToOne(() => User, (user) => user.credentials)
    user: User;
}
