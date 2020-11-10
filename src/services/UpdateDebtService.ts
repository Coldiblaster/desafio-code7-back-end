import { getCustomRepository } from 'typeorm';

import DebtsRepository from '../repositories/DebtsRepository';
import Debt from '../models/Debt';
import AppError from '../utils/errors/AppError';

interface User {
  idUser: number;
  debtReason: string;
  debtDate: Date;
  value: number;
}

class UpdateDebtService {
  public async execute(
    id: string,
    { idUser, debtDate, debtReason, value }: User,
  ): Promise<Debt | undefined> {
    const debtsRepository = getCustomRepository(DebtsRepository);

    const debt = await debtsRepository.findById(id);

    if (!debt) {
      throw new AppError('No debt found!.');
    }

    const updateData = await debtsRepository.updateDebt({
      id: debt.id,
      id_user: idUser,
      debt_date: debtDate,
      debt_reason: debtReason,
      value,
    });

    return updateData;
  }
}

export default UpdateDebtService;
