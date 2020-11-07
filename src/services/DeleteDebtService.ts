import DebtsRepository from '../repositories/DebtsRepository';
import Debt from '../models/Debt';

class DeleteDebtService {
  private debtsRepository: DebtsRepository;

  constructor(debtsRepository: DebtsRepository) {
    this.debtsRepository = debtsRepository;
  }

  public execute(id: string): Debt[] {
    const debt = this.debtsRepository.delete(id);

    return debt;
  }
}

export default DeleteDebtService;
