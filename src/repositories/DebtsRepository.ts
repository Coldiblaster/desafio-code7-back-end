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

  public all(): Debt[] {
    return this.debts;
  }

  public getUserDebts(id: number): CreateDebtDTO[] {
    const debtsFound = this.debts;

    const debtExists = debtsFound.filter(item => item.idUser === id && item);

    if (!debtExists.length) {
      throw new AppError('There are no debts for this user.');
    }

    return debtExists;
  }

  public getDebt(id: string): CreateDebtDTO {
    const debtsFind = this.debts;

    const debt = debtsFind.find(item => item.id === id);

    if (!debt) {
      throw new AppError('Not are no debts.');
    }

    return debt;
  }

  public create({ idUser, debtReason, debtDate, value }: CreateDebtDTO): Debt {
    const debt = new Debt({ idUser, debtReason, debtDate, value });

    this.debts.push(debt);

    return debt;
  }

  public update(
    id: string,
    { idUser, debtDate, debtReason, value }: CreateDebtDTO,
  ): Debt[] {
    const debtsFound = this.debts;

    const debtIndex = debtsFound.findIndex(item => item.id === id);

    if (debtIndex) {
      throw new AppError('Debt not found.');
    }

    const updateDebt = {
      id,
      idUser,
      debtDate,
      debtReason,
      value,
    };

    debtsFound[debtIndex] = updateDebt;

    return debtsFound;
  }

  public delete(id: string): Debt[] {
    const debtsFound = this.debts;

    const debtsExists = debtsFound.find(item => item.id === id);

    if (!debtsExists) {
      throw new AppError('Debt not found.');
    }

    const debts = debtsFound.filter(item => item.id !== id && item);

    this.debts = debts;

    return debts;
  }
}

export default DebtsRepository;
