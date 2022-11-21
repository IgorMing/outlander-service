import { Router } from 'express';
import { personRepository } from '../om/person';

export const router = Router();

router.get('/:id', async (req, res) => {
  const person = await personRepository.fetch(req.params.id);
  res.send(person);
});

router.post('/', async (req, res) => {
  const person = await personRepository.createAndSave(req.body);
  res.send(person);
});

router.put('/:id', async (req, res) => {
  const { body, params } = req;
  const person = await personRepository.fetch(params.id);

  person.firstName = body.firstName ?? null;
  person.lastName = body.lastName ?? null;
  person.age = body.age ?? null;
  person.verified = body.verified ?? null;
  person.location = body.location ?? null;
  person.locationUpdated = body.locationUpdated ?? null;
  person.skills = body.skills ?? null;
  person.personalStatement = body.personalStatement ?? null;

  await personRepository.save(person);

  res.send(person);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  personRepository.remove(id);
  res.send({ id });
});
