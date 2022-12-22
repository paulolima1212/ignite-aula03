import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import {
  CloseModalButton,
  Content,
  Overlay,
  TransactionTypeButon,
  TransactionTypeContainer,
} from './styles';
import * as Dialog from '@radix-ui/react-dialog';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <form>
          <input type='text' placeholder='Description' required />
          <input type='number' placeholder='Price' required />
          <input type='text' placeholder='Category' required />

          <TransactionTypeContainer>
            <TransactionTypeButon variant='income' value='income'>
              <ArrowCircleUp size={24} />
              Income
            </TransactionTypeButon>
            <TransactionTypeButon variant='outcome' value='outcome'>
              <ArrowCircleDown size={24} />
              Outcome
            </TransactionTypeButon>
          </TransactionTypeContainer>

          <button type='submit'>Confirm</button>
        </form>
        <CloseModalButton>
          <X size={22} weight='bold' />
        </CloseModalButton>
      </Content>
    </Dialog.Portal>
  );
}
