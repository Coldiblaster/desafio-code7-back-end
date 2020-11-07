import { v4 as uuidv4 } from 'uuid';

class Debt {
  id: string;

  idUser: number;

  debtReason: string;

  debtDate: Date;

  value: number;

  constructor({ idUser, debtReason, debtDate, value }: Omit<Debt, 'id'>) {
    this.id = uuidv4();
    this.idUser = idUser;
    this.debtReason = debtReason;
    this.debtDate = debtDate;
    this.value = value;
  }
}

export default Debt;
