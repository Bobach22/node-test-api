import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ImageDataRead } from "./image.data";

@Entity({name:'images'})
export class Image {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    file_size!:number;

    @Column()
    url!: string;

    @Column({name:"created_at"})
    created_at?:Date

    public  buildData():ImageDataRead {

        return { 
            id: this.id,
            file_size:this.file_size,
            url:this.url
        }
    }
}