import { MagnifyingGlass } from 'phosphor-react';
import {
  ButtonFindTransaction,
  FieldSearchContainer,
  InputSearch,
} from './styles';

export function FieldSerch() {
  return (
    <FieldSearchContainer>
      <InputSearch type='text' placeholder='Find a transaction' />
      <ButtonFindTransaction type='submit'>
        <MagnifyingGlass size={16} weight='bold' />
        <span>Find</span>
      </ButtonFindTransaction>
    </FieldSearchContainer>
  );
}
