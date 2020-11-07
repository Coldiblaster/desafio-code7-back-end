import DebtsRepository from '../repositories/DebtsRepository';
import Debt from '../models/Debt';

interface User {
  idUser: number;
  debtReason: string;
  debtDate: Date;
  value: number;
}

class CreateDebtService {
  private debtsRepository: DebtsRepository;

  constructor(debtsRepository: DebtsRepository) {
    this.debtsRepository = debtsRepository;
  }

  public execute({ idUser, debtReason, debtDate, value }: User): Debt {
    const debt = this.debtsRepository.create({
      idUser,
      debtReason,
      debtDate,
      value,
    });

    return debt;
  }
}

export default CreateDebtService;
