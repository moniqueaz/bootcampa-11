import Transactinos from '../models/Transactions';
import Transactions from '../models/Transactions';

interface CreateTransationDTO {
  title: String;
  value: number;
  type: 'income' | 'outcome';
}
interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactinosRepository {
  private transactions: Transactinos[];
  constructor() {
    this.transactions = [];
  }

  public getBalance(): Balance {
    const balance = this.transactions.reduce(
      ({ income, outcome, total }, { type, value }) => {
        if (type === 'income') {
          total += value;
          income += value;
        } else if (type === 'outcome') {
          total -= value;
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

    return balance;
  }

  public create({ title, value, type }: CreateTransationDTO): Transactions {
    const transactions = new Transactinos({ title, value, type });
    this.transactions.push(transactions);
    return transactions;
  }

  public all(): Transactinos[] {
    return this.transactions;
  }
}

export default TransactinosRepository;
