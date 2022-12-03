import { Router } from 'express';
import { personRepository } from '../om/person';

const router = Router();

router.get('/all', async (_, res) => {
  const all = await personRepository.search().returnAll();
  res.send(all);
});

router.get('/about/:text', async (req, res) => {
  const person = await personRepository
    .search()
    .where('description')
    .match(req.params.text)
    .returnAll();

  res.send(person);
});

// router.get('/by-last-name/:lastName', async (req, res) => {
//   const lastName = req.params.lastName;
//   const persons = await personRepository
//     .search()
//     .where('lastName')
//     .equals(lastName)
//     .return.all();
//   res.send(persons);
// });

export default router;
