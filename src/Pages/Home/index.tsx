import { FieldSerch } from './Components/FieldSerch';
import { Header } from '../../Components/Header';
import { Sumary } from './Components/Sumary';
import { Table } from './Components/Table';
import { HomeContainer } from './styles';

export function Home() {
  return (
    <HomeContainer>
      <Header />
      <Sumary />
      <FieldSerch />
      <Table />
    </HomeContainer>
  );
}
