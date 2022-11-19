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
