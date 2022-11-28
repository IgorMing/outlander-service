import { Router } from 'express';
import { personRepository } from '../om/person';

const router = Router();

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

  person.name = body.name ?? null;
  person.publicName = body.publicName ?? null;
  person.birthDate = body.birthDate ?? null;
  person.interests = body.interests ?? null;
  person.location = body.location ?? null;
  person.description = body.description ?? null;

  await personRepository.save(person);

  res.send(person);
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await personRepository.remove(id);
  res.send({ id });
});

export default router;
