import { ITokenService } from "../../interface/ITokenService"
import jwt from "jsonwebtoken"

export default class TokenService implements ITokenService {
    async createToken(payload: any, secretKey: string, lifetime: number): Promise<string> {
        
    }

    async verifyToken<T>(token: string, secretKey: string): Promise<boolean | T> {
        
    }
}