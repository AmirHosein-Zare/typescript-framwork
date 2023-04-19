import { Express, json, urlencoded } from "express";
import morgan from "morgan";

export default class Middleware{
    init(app: Express){
        app.use(json());
        app.use(urlencoded({extended: true}));
        app.use(morgan('tiny'));
    }
}