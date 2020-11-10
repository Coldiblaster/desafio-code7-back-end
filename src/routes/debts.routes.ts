import { Router } from 'express';

import { getCustomRepository } from 'typeorm';

import DebtsRepository from '../repositories/DebtsRepository';
import CreateDebtService from '../services/CreateDebtService';
import UpdateDebtService from '../services/UpdateDebtService';
import DeleteDebtService from '../services/DeleteDebtService';

const debtsRouter = Router();

debtsRouter.post('/', async (request, response) => {
  const { idUser, debtReason, debtDate, value } = request.body;

  const createDebt = new CreateDebtService();

  const debt = await createDebt.execute({
    idUser,
    debtReason,
    debtDate,
    value,
  });

  return response.json(debt);
});

debtsRouter.put('/:id', async (request, response) => {
  const { id } = request.params;
  const debtUpdate = request.body;

  const updateDebt = new UpdateDebtService();

  const debt = await updateDebt.execute(id, debtUpdate);

  return response.json(debt);
});

debtsRouter.delete('/:id', async (request, response) => {
  const { id } = request.params;

  const deleteDebt = new DeleteDebtService();

  await deleteDebt.execute(id);

  return response.status(204).send();
});

debtsRouter.get('/', async (request, response) => {
  const debtsRepository = getCustomRepository(DebtsRepository);

  const debts = await debtsRepository.all();

  return response.json(debts);
});

debtsRouter.get('/user/:id', async (request, response) => {
  const { id } = request.params;

  const debtsRepository = getCustomRepository(DebtsRepository);

  const userDebt = await debtsRepository.getUserDebts(Number(id));

  return response.json(userDebt);
});

debtsRouter.get('/details/:id', async (request, response) => {
  const { id } = request.params;

  const debtsRepository = getCustomRepository(DebtsRepository);

  const debt = await debtsRepository.getDebt(id);

  return response.json(debt);
});

export default debtsRouter;
