import { ReactNode, createContext, useEffect, useState } from 'react';
import { getTransactions } from '../Services/http/gets/getTransactions';
import { createNewTransaction } from '../Services/http/sets/createNewTransaction';

interface TransactionsContextProps {
  transactions: TransactionsProps[];
  handlerLoadTransactions: (query?: string) => void;
  handlerCreateNewTransaction: (data: TransactionsProps) => void;
}

export interface TransactionsProps {
  id?: number;
  description: string;
  type: 'income' | 'outcome';
  price: number;
  category: string;
  createdAt: string;
}

export const TransactionsContext = createContext(
  {} as TransactionsContextProps
);

export function TransactionsContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  async function handlerLoadTransactions(query?: string) {
    const data = await getTransactions(query);
    setTransactions(data);
  }

  async function handlerCreateNewTransaction(data: TransactionsProps) {
    const newTransaction = await createNewTransaction(data);
    setTransactions((prev) => [newTransaction, ...prev]);
  }

  useEffect(() => {
    handlerLoadTransactions('');
  }, []);

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        handlerLoadTransactions,
        handlerCreateNewTransaction,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
}
