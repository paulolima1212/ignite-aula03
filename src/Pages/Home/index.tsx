import { Header } from '../../Components/Header';
import { Sumary } from '../../Components/Sumary';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Sumary />
    </HomeContainer>
  );
}
