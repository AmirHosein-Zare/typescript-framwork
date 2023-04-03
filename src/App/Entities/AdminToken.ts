export default class AdminToken {
    constructor(
        public _id: string,
        public email: string,
        public password: string,
        public isAdmin: boolean
    ){}

    toPlainObject(){
        return {
            _id: this._id,
            email: this.email,
            password: this.password,
            isAdmin: this.isAdmin
        }
    }
}