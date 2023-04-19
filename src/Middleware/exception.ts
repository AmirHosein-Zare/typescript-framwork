import { NextFunction, Request, Response } from "express";
import { error } from "winston";

export default function exception(err: Error ,req: Request, res: Response, next: NextFunction){
    error(err.message, err);
    res.status(500).send('server error');
}