import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name:'images'})
export class Image {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    file_size!:string;

    @Column()
    url!: string;

    @Column({name:"created_at"})
    created_at?:Date
}