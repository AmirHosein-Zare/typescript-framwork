export default class BaseAppError extends Error {
    constructor(
        public message: string,
        public originalError: Error
    ){
        super();
    }
}