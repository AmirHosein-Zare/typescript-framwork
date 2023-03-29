import mongoose from "mongoose";
import IDatabaseService from "../interfaces/Repository/IDatabaseService";

export default class MongooseConnection implements IDatabaseService{
    async connect(): Promise<void> {
        // connect to mongodb
        await mongoose.connect('mongodb://127.0.0.1/Express-Type');
    }
}