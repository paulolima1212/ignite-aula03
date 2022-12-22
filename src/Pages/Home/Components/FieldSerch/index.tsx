import { MagnifyingGlass } from 'phosphor-react';
import {
  ButtonFindTransaction,
  FieldSearchContainer,
  InputSearch,
} from './styles';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const searchFormSchema = z.object({
  query: z.string(),
});

type SearchFormSchema = z.infer<typeof searchFormSchema>;

export function FieldSerch() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormSchema>({
    resolver: zodResolver(searchFormSchema),
  });

  function handleSearchSumit(data: SearchFormSchema) {
    console.log(data);
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
