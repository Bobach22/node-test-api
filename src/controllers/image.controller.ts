import axios from 'axios';
import * as typeorm from 'typeorm';
import {Request, Response, NextFunction} from 'express';
import { Image } from '../models/image.entity';
import {DogResponse} from '../common/interfaces/resource'
import CONFIG from '../config';
import { ImageRepository } from '../models/image.repository';
import { getRepository } from 'typeorm';
import { ImageDataRead } from '../models/image.data';

export default class ImageController{

    public imageRepository: ImageRepository;

    public constructor(imageRepository: ImageRepository){
        this.imageRepository=imageRepository;
        this.index=this.index.bind(this)
        this.store=this.store.bind(this)
    }

    public async index(req: Request, res: Response){
        let images=await this.imageRepository.findAll();
        

        return res.send(images.map(image=>image.buildData()));
    }

    public async store(req: Request, res: Response){
        
        const response=await axios.get<DogResponse>(CONFIG.dog_url!)
        
        const newImage=new Image();
        newImage.file_size=response.data.fileSizeBytes;
        newImage.url=response.data.url;
        newImage.created_at=new Date();
        
        const imageRepository=getRepository(Image);
        const data=await imageRepository.save(newImage)

        return res.send(data);
    }

}