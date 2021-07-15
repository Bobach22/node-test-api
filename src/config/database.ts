import { ConnectionOptions } from "typeorm";
import CONFIG from ".";
import { Image } from "../models/image.entity";


const config:ConnectionOptions={
    type:"postgres",
    host:CONFIG.db_host||"localhost",
    port:CONFIG.db_port||5432,
    username:CONFIG.db_user||"postgres",
    password:CONFIG.db_password||"postgres",
    database:CONFIG.db_name||"postgres",
    entities:[Image],
    synchronize:true,
}

export default config;