import { Express } from "express";
import IApp from "./interface/IApp";

export default class App implements IApp{
    private _app: Express;
    private _port: String;

    constructor(app: Express, port: String){
        this._app = app;
        this._port = port;

        this.initializeController();
        this.initializeMiddleware();
    }

    get app(): Express{
        return this._app;
    }

    get port(): String{
        return this._port;
    }

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Listening on port ${this.port}...`);
        })   
    }

    private initializeController(): void {

    }

    private initializeMiddleware(): void{

    }
}