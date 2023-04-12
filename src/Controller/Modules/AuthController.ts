import Auth from "../../App/Modules/Auth";
import Controller from "../Controller";

export default class AuthController extends Controller{

    constructor(
        private _auth: Auth,

    ){
        super();
    }
}