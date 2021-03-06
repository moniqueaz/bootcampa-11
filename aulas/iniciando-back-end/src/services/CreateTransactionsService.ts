import AppError from '../errors/AppError';
import Transactions from '../models/Transactions';
import TransactinosRepository from '../repositories/TransactionsRespository';

interface RequestDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactinosRepository;

  constructor(transactionsRepository: TransactinosRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: RequestDTO): Transactions {
    if (
      type === 'outcome' &&
      this.transactionsRepository.getBalance().total < value
    ) {
      throw new AppError('Balance sheet total less than outcome!');
    }
    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });
    return transaction;
  }
}

export default CreateTransactionService;
