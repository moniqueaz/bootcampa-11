import Transactions from '../models/Transactions';
import TransactinosRepository from '../repositories/TransactionsRespository';

interface RequestDTO {
  total: String;
  value: number;
  type: String;
}

class ListTransactionService {
  private transactionsRepository: TransactinosRepository;

  constructor(transactionsRepository: TransactinosRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute() {
    const transactions = this.transactionsRepository.all();
    const balance = transactions.reduce(
      ({ income, outcome, total }, { type, value }) => {
        total += value;
        if (type === 'income') {
          income += value;
        } else if (type === 'outcome') {
          outcome += value;
        }
        return {
          income,
          outcome,
          total,
        };
      },
      {
        income: 0,
        outcome: 0,
        total: 0,
      },
    );
    return {
      transactions: [...transactions],
      balance,
    };
  }
}

export default ListTransactionService;
