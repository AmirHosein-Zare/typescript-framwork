import IPasswordService from "../../interface/IPasswordService";
import bcrypt from "bcrypt";
import BaseDataError from "../../../Data/Helper/BaseDataError";

export default class PasswordService implements IPasswordService {
    async hash(password: string): Promise<string> {
        try {
            return await bcrypt.hash(password, 15);
        } catch (error) {
            throw new BaseDataError("error while hashing password", error);
        }
    }   

    async verify(password: string, hash: string): Promise<boolean> {
        try {
            return await bcrypt.compare(password, hash)
        } catch (error){
            return false;
        }
    }
}