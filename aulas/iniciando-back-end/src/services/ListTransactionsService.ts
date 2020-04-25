import TransactinosRepository from '../repositories/TransactionsRespository';

class ListTransactionService {
  private transactionsRepository: TransactinosRepository;

  constructor(transactionsRepository: TransactinosRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute() {
    const transactions = this.transactionsRepository.all();
    const balance = this.transactionsRepository.getBalance();
    return {
      transactions: [...transactions],
      balance,
    };
  }
}

export default ListTransactionService;
