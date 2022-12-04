import request from 'supertest';
import app from '../app';

import user from '../persons/igor-ming.json';

describe('App', () => {
  let id;

  it('create a user', async () => {
    const { body } = await request(app).post('/people').send(user);
    const { entityId, name } = body;
    expect(name).toEqual('Igor Ming de Mesquita');
    expect(entityId).toBeTruthy();
    id = entityId;
  });

  it('deletes a user', async () => {
    const { body } = await request(app).delete(`/people/${id}`);
    expect(body.id).toBeTruthy();
  });
});
