import { EntityRepository, Repository,getRepository } from "typeorm";
import {Image} from './image.entity'

@EntityRepository(Image)
export class ImageRepository extends Repository<Image>{
    async findAll():Promise<Image[]>{
        return await getRepository(Image).createQueryBuilder('images').getMany();
        ;
    }
}