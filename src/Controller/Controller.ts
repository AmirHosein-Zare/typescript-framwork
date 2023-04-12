import { NextFunction, Request, Response, Router } from "express";
import IController from "./interface/IController";
import asyncWrapper from "../Helper/asyncWrapper";

export default class Controller implements IController{
    private readonly router: Router;

    constructor(
        public path: string
    ){
        this.actions = [];
        this.router = Router();
    }

    private actions: Array<{
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
        this.actions.push({
            path: this.path + path,
            method,
            handler,
            middlewares
        })
    }

    public setupActions(): Router{
        this.actions.forEach(action => {
            switch (action.method) {
                case "get":
                    this.router.get(action.path, action.middlewares ?? [],action.handler);
                    break;
                case "post":
                    this.router.post(action.path, action.middlewares ?? [], action.handler);
                    break;
                case "put": 
                    this.router.put(action.path, action.middlewares ?? [], action.handler);
                case "delete":
                    this.router.delete(action.path, action.middlewares ?? [], action.handler);
            
            }
        })
        return this.router;
    }

}