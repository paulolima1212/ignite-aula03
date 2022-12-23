import { api } from '../../../Config/axios.config';

export async function getTransactions(query?: string) {
  const data = await (
    await api.get(`/transactions`, {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      },
    })
  ).data;

  return data;
}
