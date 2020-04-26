import { Router } from 'express';
import TransactinosRepository from '../repositories/TransactionsRespository';
import ListTransactionService from '../services/ListTransactionsService';
import CreateTransactionService from '../services/CreateTransactionsService';

const transactionsRoutes = Router();
const transactionRepository = new TransactinosRepository();

transactionsRoutes.get('/', (request, response) => {
  const listTransactionService = new ListTransactionService(
    transactionRepository,
  );

  return response.status(200).json(listTransactionService.execute());
});

transactionsRoutes.post('/', (request, response) => {
  const { title, value, type } = request.body;

  const createTransactionService = new CreateTransactionService(
    transactionRepository,
  );

  return response
    .status(201)
    .json(createTransactionService.execute({ title, value, type }));
});

export default transactionsRoutes;
