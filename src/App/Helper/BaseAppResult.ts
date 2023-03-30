import { ResultStatus } from "./ResultStatus";

export default class BaseAppResult<T>{
    constructor(
        public data: T,
        public isError: boolean,
        public status: ResultStatus,
        public message: string
    ){}
}