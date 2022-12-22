import { api } from '../../../Config/axios.config';

export async function getTransaction() {
  const data = await (await api.get('transactions')).data;

  return data;
}
