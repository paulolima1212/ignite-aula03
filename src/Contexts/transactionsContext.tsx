import { ReactNode, createContext, useEffect, useState } from 'react';
import { getTransaction } from '../Services/http/gets/getTransactions';

interface TransactionsContextProps {
  transactions: TransactionsProps[];
}

export interface TransactionsProps {
  id: number;
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

  async function getNewTransaction() {
    const data = await getTransaction();
    setTransactions(data);
  }

  useEffect(() => {
    getNewTransaction();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
