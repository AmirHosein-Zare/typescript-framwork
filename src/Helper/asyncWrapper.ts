import { NextFunction, Request, response } from "express";

export default function asyncWrapper(func: Function) {
    return async(req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            await func(req, res, next);
        } catch (error) {
            next(error);        
        }
    }
}