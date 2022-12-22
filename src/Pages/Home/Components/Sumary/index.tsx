import { ArrowCircleUp, CurrencyEur, ArrowCircleDown } from 'phosphor-react';
import { SumaryCardContainer, SumaryContainer } from './styles';
import { formatMoney } from '../../../../Utils/formatter';
import { useSumary } from '../../../../Hooks/useSumary';

export function Sumary() {
  const sumary = useSumary();
  return (
    <SumaryContainer>
      <SumaryCardContainer>
        <header>
          <span>Income</span>
          <ArrowCircleUp size={32} color='#00b37e' />
        </header>
        <strong>{formatMoney.format(sumary.income)}</strong>
      </SumaryCardContainer>
      <SumaryCardContainer>
        <header>
          <span>Outcome</span>
          <ArrowCircleDown size={32} color='#f75a68' />
        </header>
        <strong>{formatMoney.format(sumary.outcome)}</strong>
      </SumaryCardContainer>
      <SumaryCardContainer variant={'green'}>
        <header>
          <span>Sumary</span>
          <CurrencyEur size={32} color='#fff' />
        </header>
        <strong>{formatMoney.format(sumary.total)}</strong>
      </SumaryCardContainer>
    </SumaryContainer>
  );
}
