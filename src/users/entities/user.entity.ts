import { Column, DeleteDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'user' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable:false })
    name: string;

    @Column({ unique: true, nullable:false})
    email: string;

    @Column({ nullable:false })
    password: string;

    @Column({ default: 'user'})
    rol: string;

    @DeleteDateColumn()
    deletedAt: Date;
}
