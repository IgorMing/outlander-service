import { Router } from 'express';
import { personRepository } from '../om/person';

const router = Router();

router.get('', async (_, res) => {
  const all = await personRepository.search().returnAll();
  res.send(all);
});

router.get('/about/:text', (req, res) => {
  const person = personRepository
    .search()
    .where('personalStatement')
    .contains(req.params.text);

  res.send(person);
});

export default router;
