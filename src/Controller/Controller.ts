import { Router } from "express";
import IController from "./interface/IController";

export default class Controller implements IController{
    constructor(
        public router: Router,
        public path: string
    ){}

    
}