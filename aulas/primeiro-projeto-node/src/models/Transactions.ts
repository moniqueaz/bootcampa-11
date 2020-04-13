import { uuid } from 'uuidv4';

class Transactions {
  id: String;

  title: String;

  value: number;

  type: String;

  constructor({ title, value, type }: Omit<Transactions, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.value = value;
    this.type = type;
  }
}

export default Transactions;
