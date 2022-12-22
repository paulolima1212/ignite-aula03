import { useTransaction } from '../../../../Hooks/useTransactionContext';
import { formatDate, formatMoney } from '../../../../Utils/formatter';
import { PriceHighLight, TableContainer, TableTrasactions } from './styles';

export function Table() {
  const { transactions } = useTransaction();

  return (
    <TableContainer>
      <TableTrasactions>
        <tbody>
          {transactions.map((transaction) => {
            return (
              <tr key={transaction.id}>
                <td width={'50%'}>{transaction.description}</td>
                <td>
                  <PriceHighLight variant={transaction.type}>
                    {formatMoney.format(transaction.price)}
                  </PriceHighLight>
                </td>
                <td>{transaction.category}</td>
                <td>{formatDate.format(new Date(transaction.createdAt))}</td>
              </tr>
            );
          })}
        </tbody>
      </TableTrasactions>
    </TableContainer>
  );
}
