import { Express } from "express";
import api from "./Modules/api";

export default class Router{
    init(app: Express): void{
        app.use('/api', api);
    }
}
