export default class BaseDataResult<T>{
    constructor(
        public data: T,
        public isError: Boolean
    ){}
}