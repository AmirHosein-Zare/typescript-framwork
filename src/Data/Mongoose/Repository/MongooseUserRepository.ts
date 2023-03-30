import User from "../../Entities/User";
import IUser from "../../interfaces/IUser";
import BaseDataResult from "../../Model/BaseDataResult";

export default class MongooseUserRepository implements IUser{
    create(user: User): Promise<BaseDataResult<User>> {
        
    }

    findByEmail(email: String): Promise<BaseDataResult<User>> {
        
    }
}