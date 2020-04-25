import { uuid } from 'uuidv4';

class Transactions {
  id: string;

  title: string;

  value: number;

  type: 'income' | 'outcome';

  constructor({ title, value, type = 'income' }: Omit<Transactions, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default Transactions;
