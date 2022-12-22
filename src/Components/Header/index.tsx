import { ButtonNewTrasaction, HeaderContainer, HeaderContent } from './styles';

import igniteLogo from '../../assets/ignite-logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>
          <img src={igniteLogo} alt='' />
          <span>DT Money</span>
        </div>
        <ButtonNewTrasaction>New transaction</ButtonNewTrasaction>
      </HeaderContent>
    </HeaderContainer>
  );
}
