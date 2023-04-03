export default class User{
    constructor(
        public _id: String,
        public name: String,
        public number: String,
        public email: String,
        public isAdmin: Boolean,
        public password: String
    ){}
}