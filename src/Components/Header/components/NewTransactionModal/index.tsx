import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import {
  CloseModalButton,
  Content,
  Overlay,
  TransactionTypeButon,
  TransactionTypeContainer,
} from './styles';
import * as Dialog from '@radix-ui/react-dialog';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import { useTransaction } from '../../../../Hooks/useTransactionContext';

enum TypeTransaction {
  income = 'income',
  outcome = 'outcome',
}

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.nativeEnum(TypeTransaction),
});

type NewTransactionForm = z.infer<typeof newTransactionFormSchema>;

type DataNewTransactions = NewTransactionForm;

export function NewTransactionModal() {
  const { handlerCreateNewTransaction, handlerLoadTransactions } =
    useTransaction();

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<NewTransactionForm>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: {
      type: TypeTransaction.income,
    },
  });

  function handleCreateNewTransaction(data: DataNewTransactions) {
    const { category, description, price, type } = data;
    const newTransaction = {
      category,
      description,
      price,
      type,
      createdAt: String(new Date()),
    };

    handlerCreateNewTransaction(newTransaction);
    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type='text'
            placeholder='Description'
            required
            {...register('description')}
          />
          <input
            type='number'
            placeholder='Price'
            required
            {...register('price', { valueAsNumber: true })}
          />
          <input
            type='text'
            placeholder='Category'
            required
            {...register('category')}
          />

          <Controller
            control={control}
            name='type'
            render={({ field, ...props }) => {
              return (
                <TransactionTypeContainer
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <TransactionTypeButon
                    variant='income'
                    value='income'
                    {...register('type')}
                  >
                    <ArrowCircleUp size={24} />
                    Income
                  </TransactionTypeButon>
                  <TransactionTypeButon
                    variant='outcome'
                    value='outcome'
                    {...register('type')}
                  >
                    <ArrowCircleDown size={24} />
                    Outcome
                  </TransactionTypeButon>
                </TransactionTypeContainer>
              );
            }}
          />

          <button type='submit' disabled={isSubmitting}>
            Confirm
          </button>
        </form>
        <CloseModalButton>
          <X size={22} weight='bold' />
        </CloseModalButton>
      </Content>
    </Dialog.Portal>
  );
}
