import { Entity, Schema } from 'redis-om';
import client from './client';

class Person extends Entity {}

const personSchema = new Schema(
  Person,
  {
    name: { type: 'string' },
    publicName: { type: 'string' },
    birthDate: { type: 'date' },
    interests: { type: 'string[]' },
    location: { type: 'point' },
    description: { type: 'text' },
  },
  {
    dataStructure: 'JSON',
  }
);

const personRepository = client.fetchRepository(personSchema);
await personRepository.createIndex();

export { personRepository };
