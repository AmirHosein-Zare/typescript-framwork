import { Express } from "express";
import IApp from "./interface/IApp";
import Router from "../Router/Router";

export default class App implements IApp{
    private _app: Express;
    private _port: String | Number;

    constructor(app: Express, port: String | Number){
        this._app = app;
        this._port = port;

        this.initializeController();
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
}