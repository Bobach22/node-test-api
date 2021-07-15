import {Request, Response, NextFunction,Application} from "express";
import ImageController from "../controllers/image.controller";

export default class Router{
    
    public imageController: ImageController=new ImageController();

    public routes(app:Application):void{
        app.route('/upload/dog/image')

           .post(this.imageController.store);

        app.route('/list/dog/images')

            .get(this.imageController.index)

        }

        
    
}