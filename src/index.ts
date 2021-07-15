import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import CONFIG from './config';
import { createConnection } from 'typeorm';
import dbConfig from "./config/database";
import Router from './routes';

if (!CONFIG.port) {
  process.exit(1);
}

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());
(new Router()).routes(app);

createConnection(dbConfig).then((connection)=>{
  app.listen(CONFIG.port, () => {
  console.log(`Listening on port ${CONFIG.port}`);
});

}).catch(err => {
  console.log("Unable to connect to db",err);
  process.exit(1);
})

