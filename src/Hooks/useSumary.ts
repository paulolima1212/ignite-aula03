import { useTransaction } from './useTransactionContext';

export function useSumary() {
  const { transactions } = useTransaction();

  const sumary = transactions.reduce(
    (acc, transaction) => {
      switch (transaction.type) {
        case 'income':
          acc.income += transaction.price;
          acc.total += transaction.price;
          break;
        case 'outcome':
          acc.outcome += transaction.price;
          acc.total -= transaction.price;
          break;
      }

      return acc;
    },
    {
      income: 0,
      outcome: 0,
      total: 0,
    }
  );

  return sumary;
}
