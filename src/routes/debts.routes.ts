import { Router } from 'express';

import DebtsRepository from '../repositories/DebtsRepository';
import CreateDebtsService from '../services/CreateDebtService';

const debtsRouter = Router();
const debtsRepository = new DebtsRepository();

debtsRouter.post('/', (request, response) => {
  const { idUser, debtReason, debtDate, value } = request.body;

  const createDebt = new CreateDebtsService(debtsRepository);

  const debt = createDebt.execute({
    idUser,
    debtReason,
    debtDate,
    value,
  });

  return response.json(debt);
});

debtsRouter.get('/:id', async (request, response) => {
  const { id } = request.params;

  const debt = debtsRepository.getDebt(Number(id));

  return response.json(debt);
});

export default debtsRouter;
