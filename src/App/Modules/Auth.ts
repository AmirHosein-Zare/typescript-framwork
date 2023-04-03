import { DataTypes } from "../../Data/Types/DataTypes";
import {inject, injectable} from "inversify";
import BaseAppResult from "../Helper/BaseAppResult";
import User from "../../Data/Entities/User";
import IUser from "../../Data/interfaces/IUser";
import BaseAppError from "../Helper/BaseAppError";
import { ResultStatus } from "../Helper/ResultStatus";
import { AppDataTypes } from "../Types/DataTypes";
import IPasswordService from "../interface/IPasswordService";
import IIDService from "../interface/IIDService";

@injectable()
export default class Auth{
    constructor(
        @inject(DataTypes.IUser) private _user : IUser,
        @inject(AppDataTypes.IPasswordService) private _passwordService: IPasswordService,
        @inject(AppDataTypes.IDService) private _idService: IIDService
    ){} 

    async createUser(name: string, email: string, password: string, number: string): Promise<BaseAppResult<User | {id: String}>>{
        try {
            const findUser = await this._user.findByEmail(email);

            if(findUser.data) return new BaseAppResult<any>(null, true, ResultStatus.Duplicate, "user already exist ...");
        
            const user = new User (
                this._idService.generate(),
                name,
                number,
                email,
                false,
                await this._passwordService.hash(password)
            );

            await this._user.create(user);

            return new BaseAppResult<User | {id: String}>(
                {
                    id: user._id
                },
                false,
                ResultStatus.Success,
                "user Created"
            );
        } catch (error) {
            throw new BaseAppError("error while create user", error);
        }
    }

}