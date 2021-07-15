import express from "express";
import cors from "cors";
import helmet from "helmet";
import CONFIG from "./config";

if(!CONFIG.port){
    process.exit(1);
}

const app=express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.listen(CONFIG.port,() =>{
    console.log(`Listening on port ${CONFIG.port}`)
})