export default class BaseDataError extends Error{
    constructor(
        public message: string,
        public originalError?: Error
    ){
        super()
    }
}