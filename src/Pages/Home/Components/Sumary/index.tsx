import { ArrowCircleUp, CurrencyEur, ArrowCircleDown } from 'phosphor-react';
import { SumaryCardContainer, SumaryContainer } from './styles';

export function Sumary() {
  return (
    <SumaryContainer>
      <SumaryCardContainer>
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} color='#00b37e' />
        </header>
        <strong>17.400.00 €</strong>
      </SumaryCardContainer>
      <SumaryCardContainer>
        <header>
          <span>Outcome</span>
          <ArrowCircleDown size={32} color='#f75a68' />
        </header>
        <strong>17.400.00 €</strong>
      </SumaryCardContainer>
      <SumaryCardContainer variant={'green'}>
        <header>
          <span>Sumary</span>
          <CurrencyEur size={32} color='#fff' />
        </header>
        <strong>17.400.00 €</strong>
      </SumaryCardContainer>
    </SumaryContainer>
  );
}
