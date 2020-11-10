import { getCustomRepository } from 'typeorm';

import DebtsRepository from '../repositories/DebtsRepository';

interface User {
  idUser: number;
  debtReason: string;
  debtDate: Date;
  value: number;
}

class CreateDebtService {
  public async execute({
    idUser,
    debtReason,
    debtDate,
    value,
  }: User): Promise<User> {
    const debtsRepository = getCustomRepository(DebtsRepository);

    const debt = await debtsRepository.createData({
      id_user: idUser,
      debt_reason: debtReason,
      debt_date: debtDate,
      value,
    });

    return debt;
  }
}

export default CreateDebtService;
