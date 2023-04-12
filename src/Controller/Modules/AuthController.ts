import { NextFunction, Request, Response } from "express";
import Auth from "../../App/Modules/Auth";
import Controller from "../Controller";
import { ResultStatus } from "../../App/Helper/ResultStatus";

export default class AuthController extends Controller{

    constructor(
        private _auth: Auth,

    ){
        super("/api");
    }

    async addUser(req: Request, res: Response, next: NextFunction): Promise<void>{
        const result = await this._auth.createUser(req.body.name, req.body.email, req.body.password, req.body.number);
        if(result.status !== ResultStatus.Success){
            
        }
    }
}