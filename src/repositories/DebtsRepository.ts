import { EntityRepository, Repository } from 'typeorm';

import Debt from '../models/Debt';

import AppError from '../utils/errors/AppError';

interface CreateDebtDTO {
  id?: string;
  id_user: number;
  debt_reason: string;
  debt_date: Date;
  value: number;
}

interface DebtFormat {
  id?: string;
  idUser: number;
  debtReason: string;
  debtDate: Date;
  value: number;
}

@EntityRepository(Debt)
class DebtsRepository extends Repository<Debt> {
  private async convertDataArray(
    debtsData: CreateDebtDTO[],
  ): Promise<DebtFormat[]> {
    const debts = debtsData.map(debt => {
      const { debt_date, debt_reason, id_user, value, id } = debt;

      const format = {
        idUser: id_user,
        debtReason: debt_reason,
        debtDate: debt_date,
        value,
        id,
      };

      return format;
    });

    return debts;
  }

  private async convertData(debtData: CreateDebtDTO): Promise<DebtFormat> {
    const { debt_date, debt_reason, id_user, value, id } = debtData;

    const debt = {
      id,
      idUser: id_user,
      debtReason: debt_reason,
      debtDate: debt_date,
      value,
    };

    return debt;
  }

  public async createData(debtData: CreateDebtDTO): Promise<DebtFormat> {
    const debt = this.create(debtData);

    await this.save(debt);

    const debtFormat = this.convertData(debt);

    return debtFormat;
  }

  public async all(): Promise<DebtFormat[]> {
    const debts = await this.find();

    return this.convertDataArray(debts);
  }

  public async getUserDebts(id: number): Promise<DebtFormat[]> {
    const debtsFound = await this.find({
      where: { id_user: id },
    });

    if (!debtsFound.length) {
      throw new AppError('There are no debts for this user.');
    }

    return this.convertDataArray(debtsFound);
  }

  public async getDebt(id: string): Promise<DebtFormat> {
    const debtFound = await this.findOne({
      where: { id },
    });

    if (!debtFound) {
      throw new AppError('Not are no debts.');
    }

    debtFound.id = id;

    const debtFormat = this.convertData(debtFound);

    return debtFormat;
  }

  public async findById(id: string): Promise<Debt | undefined> {
    const user = await this.findOne(id);

    return user;
  }

  public async updateDebt(debt: CreateDebtDTO): Promise<DebtFormat> {
    const debtUpdate = await this.save(debt);

    const debtFormat = this.convertData(debtUpdate);

    return debtFormat;
  }

  public async deleteDebt(id: string): Promise<void> {
    await this.delete(id);
  }
}

export default DebtsRepository;
