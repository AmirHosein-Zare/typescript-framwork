import { NextFunction, Request, Response, Router } from "express";
import IController from "./interface/IController";

export default class Controller implements IController{
    constructor(
        public router: Router,
        public path: string
    ){}

    private action: Array<{
        path: string,
        method: "get" | "post" | "put" | "delete",
        handler: (req: Request, res: Response, next?: NextFunction) => void,
        middlewares?: ((req: Request, res: Response, next?: NextFunction) => void)[]
    }>

    public addAction(
        path: string,
        method: "get" | "post" | "put" | "delete",
        handler: (req: Request, res: Response, next?: NextFunction) => void,
        middlewares?: ((req: Request, res: Response, next?: NextFunction) => void)[]
    ): void{
        this.action.push({
            path: this.path + path,
            method,
            handler,
            middlewares
        })
    }

    
}