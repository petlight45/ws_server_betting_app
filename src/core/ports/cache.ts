import {RedisClientType} from 'redis';


export interface CachePort {
    client: RedisClientType | null

    connectAndInitializeClient(): Promise<void>
}
