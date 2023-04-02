import { DataTypes } from "../../Data/Types/DataTypes";
import {id, inject, injectable} from "inversify";
import BaseAppResult from "../Helper/BaseAppResult";
import User from "../../Data/Entities/User";
import IUser from "../../Data/interfaces/IUser";
import BaseAppError from "../Helper/BaseAppError";
import { ResultStatus } from "../Helper/ResultStatus";

@injectable()
export default class Auth{
    @inject(DataTypes.IUser) private _user : IUser;

    async createUser(name: string, email: string, password: string, number: string): Promise<BaseAppResult<User | {id: String}>>{
        try {
            const findUser = await this._user.findByEmail(email);

            if(findUser.data) return new BaseAppResult<any>(null, true, ResultStatus.Duplicate, "user already exist ...");
        
            const user = new User (
                name,
                number,
                email,
                false,
                password
            );

            const result = await this._user.create(user);

            return new BaseAppResult<User>(
                user,
                false,
                ResultStatus.Success,
                "user Created"
            );
        } catch (error) {
            throw new BaseAppError("error while create user", error);
        }
    }

}