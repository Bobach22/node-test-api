import axios from 'axios';
import {Request, Response, NextFunction} from 'express';
import { Image } from '../models/image.entity';
import {DogResponse} from '../common/interfaces/resource'
import CONFIG from '../config';
import { ImageRepository } from '../models/image.repository';
import { getRepository } from 'typeorm';

export default class ImageController{

    public async index(){
        const images:Image[]=[];

        return images;
    }

    public async store(req: Request, res: Response){
        
        const response=await axios.get<DogResponse>(CONFIG.dog_url!)
        
        const newImage=new Image();
        newImage.file_size=response.data.fileSizeBytes;
        newImage.url=response.data.url;
        newImage.created_at=new Date();
        
        const imageRepository=getRepository(Image);

        return imageRepository.save(newImage);
    }

}