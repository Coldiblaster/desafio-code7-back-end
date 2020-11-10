import { getCustomRepository } from 'typeorm';

import DebtsRepository from '../repositories/DebtsRepository';
import AppError from '../utils/errors/AppError';

class DeleteDebtService {
  public async execute(id: string): Promise<void> {
    const debtsRepository = getCustomRepository(DebtsRepository);

    const debt = await debtsRepository.findById(id);

    if (!debt) {
      throw new AppError('No debt found!.');
    }

    await debtsRepository.deleteDebt(debt.id);
  }
}

export default DeleteDebtService;
