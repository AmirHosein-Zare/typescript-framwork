export default class AdminToken {
    constructor(
        public email: string,
        public password: string,
        public isAdmin: boolean
    ){}

    toPlainObject(){
        return {
            email: this.email,
            password: this.password,
            isAdmin: this.isAdmin
        }
    }
}