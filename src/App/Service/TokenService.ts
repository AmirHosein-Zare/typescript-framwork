import { ITokenService } from "../interface/ITokenService"

export default class TokenService implements ITokenService {
    createToken(payload: any, secretKey: string, lifetime: number): Promise<string> {
        
    }

    verifyToken<T>(token: string, secretKey: string): Promise<boolean | T> {
        
    }
}