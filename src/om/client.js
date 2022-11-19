import { Client } from 'redis-om';

const client = await new Client();
client.open(process.env.REDIS_URL);

export default client;
