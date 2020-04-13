import { Router } from 'express';
import TransactinosRepository from '../repositories/TransactionsRespository';
import ListTransactionService from '../services/ListTransactionsService';

const transactionsRoutes = Router();
const transactionRepository = new TransactinosRepository();

transactionsRoutes.get('/', (request, response) => {
  try {
    const listTransactionService = new ListTransactionService(
      transactionRepository,
    );

    return response.status(200).json(listTransactionService.execute());
  } catch (error) {}

  response.status(200).json(transactionRepository.all());
});

transactionsRoutes.post('/', (request, response) => {
  const { title, value, type } = request.body;

  return response
    .status(201)
    .json(transactionRepository.create({ title, value, type }));
});

export default transactionsRoutes;
