import {Container} from "inversify";
import IIDService from "../App/interface/IIDService";
import { AppDataTypes } from "../App/Types/DataTypes";
import IDService from "../App/Service/IDService/IDService";
import IPasswordService from "../App/interface/IPasswordService";
import PasswordService from "../App/Service/PasswordService/PasswordService";
import { ITokenService } from "../App/interface/ITokenService";
import TokenService from "../App/Service/TokenService/TokenService";
import IDatabaseService from "../Data/interfaces/IDatabaseService";
import { DataTypes } from "../Data/Types/DataTypes";
import MongooseConnection from "../Data/Mongoose/MongooseConnection";
import IUser from "../Data/interfaces/IUser";
import MongooseUserRepository from "../Data/Mongoose/Repository/MongooseUserRepository";

let container = new Container({defaultScope: "Singleton"});

// bind app service
container.bind<IIDService>(AppDataTypes.IDService).to(IDService);
container.bind<IPasswordService>(AppDataTypes.IPasswordService).to(PasswordService);
container.bind<ITokenService>(AppDataTypes.ITokenService).to(TokenService);

// bind database service
container.bind<IDatabaseService>(DataTypes.IDatabaseService).to(MongooseConnection);
container.bind<IUser>(DataTypes.IUser).to(MongooseUserRepository);

export {container};