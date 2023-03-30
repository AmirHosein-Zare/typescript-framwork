import User from "../Entities/User"
import BaseDataResult from "../Helper/BaseDataResult";

export default interface IUser {
    
    create(user: User): Promise<BaseDataResult<User>>;

    findByEmail(email: String): Promise<BaseDataResult<User>>;
}