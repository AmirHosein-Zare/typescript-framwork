import { Express } from "express";
import IApp from "./interface/IApp";
import Router from "../Router/Router";
import Middleware from "../Middleware/Middleware";
import logger from "./Logger/Logger";
import { container } from "../Container/Container";
import IDatabaseService from "../Data/interfaces/IDatabaseService";
import { DataTypes } from "../Data/Types/DataTypes";

export default class App implements IApp{
    private _app: Express;
    private _port: String | Number;

    constructor(app: Express, port: String | Number){
        this._app = app;
        this._port = port;

        this.initializeController();
        this.initializeMiddleware();
        this.connectToMongo();

        logger();
    }

    get app(): Express{
        return this._app;
    }

    get port(): String | Number{
        return this._port;
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}...`);
        })   
    }

    private initializeController(): void {
        new Router().init(this._app);       
    }

    private initializeMiddleware(): void{
        new Middleware().init(this._app);
    }

    private async connectToMongo(): Promise<void>{
        await container.get<IDatabaseService>(DataTypes.IDatabaseService).connect();
    }
}