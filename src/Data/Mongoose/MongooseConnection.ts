import mongoose from "mongoose";
import IDatabaseService from "../interfaces/Repository/IDatabaseService";
import  config  from "config";

export default class MongooseConnection implements IDatabaseService{
    async connect(): Promise<void> {
        // connect to mongodb
        await mongoose.connect(config.get('db'));
    }
}