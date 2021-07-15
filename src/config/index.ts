import * as dotenv from 'dotenv';

dotenv.config();

interface ConfigInterface{
  port?:number,
  db_host?:string,
  db_port?:number,
  db_user?:string,
  db_name?:string,
  db_password?:string,
  dog_url?:string,
}

const CONFIG :ConfigInterface = {
  port: Number(process.env.PORT),
  db_host: process.env.DB_HOST,
  db_port: Number(process.env.DB_PORT),
  db_name: process.env.DB_NAME,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  dog_url: process.env.DOG_URL,
};

export default CONFIG;
