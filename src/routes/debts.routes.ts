import { Router } from 'express';

import DebtsRepository from '../repositories/DebtsRepository';
import CreateDebtService from '../services/CreateDebtService';
import UpdateDebtService from '../services/UpdateDebtService';
import DeleteDebtService from '../services/DeleteDebtService';

const debtsRouter = Router();
const debtsRepository = new DebtsRepository();

debtsRouter.post('/', (request, response) => {
  const { idUser, debtReason, debtDate, value } = request.body;

  const createDebt = new CreateDebtService(debtsRepository);

  const debt = createDebt.execute({
    idUser,
    debtReason,
    debtDate,
    value,
  });

  return response.json(debt);
});

debtsRouter.put('/:id', (request, response) => {
  const { id } = request.params;
  const debtUpdate = request.body;

  const updateDebt = new UpdateDebtService(debtsRepository);

  const debt = updateDebt.execute(id, debtUpdate);

  return response.json(debt);
});

debtsRouter.delete('/:id', (request, response) => {
  const { id } = request.params;

  const deleteDebt = new DeleteDebtService(debtsRepository);

  const debt = deleteDebt.execute(id);

  return response.json(debt);
});

debtsRouter.get('/', (request, response) => {
  const debts = debtsRepository.all();

  return response.json(debts);
});

debtsRouter.get('/user/:id', (request, response) => {
  const { id } = request.params;

  const userDebt = debtsRepository.getUserDebts(Number(id));

  return response.json(userDebt);
});

debtsRouter.get('/details/:id', (request, response) => {
  const { id } = request.params;

  const debt = debtsRepository.getDebt(id);

  return response.json(debt);
});

export default debtsRouter;
