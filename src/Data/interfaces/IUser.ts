import User from "../Entities/User"

export default interface IUser {
    
    create(user: User): void;

    findByEmail(email: String): void;
}