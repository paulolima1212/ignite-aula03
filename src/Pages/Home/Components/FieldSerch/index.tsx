import { MagnifyingGlass } from 'phosphor-react';
import {
  ButtonFindTransaction,
  FieldSearchContainer,
  InputSearch,
} from './styles';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTransaction } from '../../../../Hooks/useTransactionContext';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormSchema = z.infer<typeof searchFormSchema>;

export function FieldSerch() {
  const { handlerLoadTransactions } = useTransaction();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormSchema>({
    resolver: zodResolver(searchFormSchema),
  });

  async function handleSearchSumit(data: SearchFormSchema) {
    handlerLoadTransactions(data.query);
  }

  return (
    <FieldSearchContainer onSubmit={handleSubmit(handleSearchSumit)}>
      <InputSearch
        type='text'
        placeholder='Find a transaction'
        {...register('query')}
      />

      <ButtonFindTransaction type='submit' disabled={isSubmitting}>
        <MagnifyingGlass size={16} weight='bold' />
        <span>Find</span>
      </ButtonFindTransaction>
    </FieldSearchContainer>
  );
}
