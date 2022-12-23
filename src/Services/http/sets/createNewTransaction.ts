import { api } from '../../../Config/axios.config';
import { TransactionsProps } from '../../../Contexts/transactionsContext';

export async function createNewTransaction(data: TransactionsProps) {
  return await (
    await api.post(`/transactions`, data)
  ).data;
}
