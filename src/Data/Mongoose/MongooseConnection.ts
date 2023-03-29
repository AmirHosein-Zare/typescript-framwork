import mongoose from "mongoose";
import IDatabaseService from "../interfaces/Repository/IDatabaseService";
import { config } from "node-config-ts";

export default class MongooseConnection implements IDatabaseService{
    async connect(): Promise<void> {
        // connect to mongodb
        await mongoose.connect(config.get('db'), {});
    }
}