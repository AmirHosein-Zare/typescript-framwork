export default interface IDatabaseService {
    connect(): Promise<void>;
}