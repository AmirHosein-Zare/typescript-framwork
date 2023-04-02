import { ITokenService } from "../../interface/ITokenService"
import jwt from "jsonwebtoken"
import BaseAppError from "../../Helper/BaseAppError";

export default class TokenService implements ITokenService {
    async createToken(payload: any, secretKey: string, lifetime: number): Promise<string> {
        try {
            return await jwt.sign(payload, secretKey, {expiresIn: lifetime});
        } catch (error) {
            throw new BaseAppError("error in create token", error);
        }
    }

    async verifyToken<T>(token: string, secretKey: string): Promise<boolean | T> {
        try {
            return await jwt.verify(token, secretKey) as T;
        } catch (error) {
            return false;
        }
    }
}