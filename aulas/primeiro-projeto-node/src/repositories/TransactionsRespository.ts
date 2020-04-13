import Transactinos from '../models/Transactions';

interface CreateTransationDTO {
  title: String;
  value: number;
  type: String;
}

class TransactinosRepository {
  private transactions: Transactinos[];
  constructor() {
    this.transactions = [];
  }

  public create({ title, value, type }: CreateTransationDTO) {
    const transactions = new Transactinos({ title, value, type });
    this.transactions.push(transactions);
    return transactions;
  }

  public all(): Transactinos[] {
    return this.transactions;
  }
}

export default TransactinosRepository;
