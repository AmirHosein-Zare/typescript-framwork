export default class BaseDataResult<T>{
    constructor(
        public data: T | null,
        public isError: Boolean
    ){}
}