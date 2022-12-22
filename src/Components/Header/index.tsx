import { ButtonNewTrasaction, HeaderContainer, HeaderContent } from './styles';
import * as Dialog from '@radix-ui/react-dialog';

import igniteLogo from '../../assets/ignite-logo.svg';
import { NewTransactionModal } from '../NewTransactionModal';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={igniteLogo} alt='' />
          <span>DT Money</span>
        </div>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <ButtonNewTrasaction>New transaction</ButtonNewTrasaction>
          </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  );
}
