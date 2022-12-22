import { useContext } from 'react';
import { TransactionsContext } from '../Contexts/transactionsContext';

export function useTransaction() {
  return useContext(TransactionsContext);
}
