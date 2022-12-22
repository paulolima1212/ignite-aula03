import { PriceHighLight, TableContainer, TableTrasactions } from './styles';

export function Table() {
  return (
    <TableContainer>
      <TableTrasactions>
        <tbody>
          <tr>
            <td width={'50%'}>Desenvolvimento de software</td>
            <td>
              <PriceHighLight variant='income'>12.000.00 €</PriceHighLight>
            </td>
            <td>Sale</td>
            <td>12/12/2022</td>
          </tr>
          <tr>
            <td width={'50%'}>Hamburger</td>
            <td>
              <PriceHighLight variant='outcome'>- 15.00 €</PriceHighLight>
            </td>
            <td>Food</td>
            <td>12/12/2022</td>
          </tr>
        </tbody>
      </TableTrasactions>
    </TableContainer>
  );
}
