import { NextFunction, Request, Response } from "express";
import Auth from "../../App/Modules/Auth";
import Controller from "../Controller";
import { ResultStatus } from "../../App/Helper/ResultStatus";
import baseResponse from "../../Helper/BaseResponse";

export default class AuthController extends Controller{

    constructor(
        private _auth: Auth,

    ){
        super("/api");
    }

    async addUser(req: Request, res: Response, next: NextFunction){
        const result = await this._auth.createUser(req.body.name, req.body.email, req.body.password, req.body.number);
        if(result.status !== ResultStatus.Success){
            if (result.status === ResultStatus.Duplicate) {
                return baseResponse(res, null, "already exist", undefined, ResultStatus.Duplicate, 400)
            } else {
                return baseResponse(res, null, "Error creating user", undefined, result.status, 500);
            }
        }
        return baseResponse(res, result.data, "User created.");
    }
}