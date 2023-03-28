import { Express } from "express"

export default interface IApp {
    app: Express;
    port: String | Number;

    listen(): void;
}