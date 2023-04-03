import IIDService from "../../interface/IIDService";
import  uuid  from "uuid";
import { injectable } from "inversify";

@injectable()
export default class IDService implements IIDService{
    public generate(): String {
        return uuid.v4();        
    }
}