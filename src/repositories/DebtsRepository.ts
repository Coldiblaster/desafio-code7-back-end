import Debt from '../models/Debt';

import AppError from '../utils/errors/AppError';

interface CreateDebtDTO {
  idUser: number;
  debtReason: string;
  debtDate: Date;
  value: number;
}

class DebtsRepository {
  private debts: Debt[];

  constructor() {
    this.debts = [];
  }

  public getDebt(id: number): CreateDebtDTO[] {
    const debtsFind = this.debts;

    const debtExists = debtsFind.filter(item => item.idUser === id && item);

    if (!debtExists.length) {
      throw new AppError('There are no debts for this user.');
    }

    return debtExists;
  }

  public create({ idUser, debtReason, debtDate, value }: CreateDebtDTO): Debt {
    const debt = new Debt({ idUser, debtReason, debtDate, value });

    this.debts.push(debt);

    return debt;
  }
}

export default DebtsRepository;
