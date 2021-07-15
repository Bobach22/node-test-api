import {Request, Response, NextFunction,Application} from "express";
import ImageController from "../controllers/image.controller";
import { ImageRepository } from "../models/image.repository";

export default class Router{
    
    public imageController: ImageController=new ImageController(new ImageRepository);

    public routes(app:Application):void{
        app.route('/upload/dog/image')

           .post(this.imageController.store);

        app.route('/list/dog/images')

            .get(this.imageController.index)

        }

        
    
}