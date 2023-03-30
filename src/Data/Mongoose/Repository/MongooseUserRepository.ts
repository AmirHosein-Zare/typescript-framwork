import User from "../../Entities/User";
import IUser from "../../interfaces/IUser";
import BaseDataError from "../../Model/BaseDataError";
import BaseDataResult from "../../Model/BaseDataResult";
import MongooseUserModel from "../Model/MongooseUserModel";

export default class MongooseUserRepository implements IUser{
    async create(user: User): Promise<BaseDataResult<User>> {
        try {
            const newUser = new MongooseUserModel(user);
            const result = await newUser.save();
            return new BaseDataResult<User>(result.toObject(), false);
        } catch (error) {
            throw new BaseDataError("Error While creating User", error);
        }
    }

    async findByEmail(email: String): Promise<BaseDataResult<User>> {
        try {
            const findUser = await MongooseUserModel.findOne({email: email});
            if(!findUser) return new BaseDataResult<User>(null, true);

            return new BaseDataResult<User>(findUser, false)
        } catch (error) {
            throw new BaseDataError("Error While finding User", error);
        }
    }
}