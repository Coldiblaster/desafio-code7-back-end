import DebtsRepository from '../repositories/DebtsRepository';
import Debt from '../models/Debt';

interface User {
  idUser: number;
  debtReason: string;
  debtDate: Date;
  value: number;
}

class UpdateDebtService {
  private debtsRepository: DebtsRepository;

  constructor(debtsRepository: DebtsRepository) {
    this.debtsRepository = debtsRepository;
  }

  public execute(
    id: string,
    { idUser, debtReason, debtDate, value }: User,
  ): Debt[] {
    const debt = this.debtsRepository.update(id, {
      idUser,
      debtReason,
      debtDate,
      value,
    });

    return debt;
  }
}

export default UpdateDebtService;
