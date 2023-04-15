import { Express, json, urlencoded } from "express";

export default class Middleware{
    init(app: Express){
        app.use(json());
        app.use(urlencoded({extended: true}));
    }
}