import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('credentials')
export class Credential {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;
}
