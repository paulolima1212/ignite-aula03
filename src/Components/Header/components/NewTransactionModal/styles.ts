import styled from 'styled-components';
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const NewTransactionModalContainer = styled.div``;

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 22rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme.colors['gray-800']};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border-radius: 6px;
      border: 0;
      background: ${({ theme }) => theme.colors['gray-900']};
      color: ${({ theme }) => theme.colors['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme.colors['gray-500']};
      }
    }

    button[type='submit'] {
      background: ${({ theme }) => theme.colors['green-500']};
      color: ${({ theme }) => theme.colors.white};
      padding: 1rem 1.25rem;
      border: none;
      border-radius: 6px;
      font-weight: bold;
      margin-top: 1.5rem;

      &:hover {
        background: ${({ theme }) => theme.colors['green-700']};
        transition: 0.4s;
      }
    }
  }
`;

export const CloseModalButton = styled(Dialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors['gray-500']};
  line-height: 0;
`;

export const TransactionTypeContainer = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButonProps {
  variant: 'income' | 'outcome';
}

export const TransactionTypeButon = styled(
  RadioGroup.Item
)<TransactionTypeButonProps>`
  background: ${({ theme }) => theme.colors['gray-700']};
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${({ theme }) => theme.colors['gray-400']};

  &[data-state='unchecked'] {
    transition: 0.2s;
    background: ${({ theme }) => theme.colors['gray-600']};
  }

  &[data-state='checked'] {
    transition: 0.2s;
    color: ${({ theme }) => theme.colors['gray-100']};
    background: ${({ theme, variant }) =>
      variant === 'income'
        ? theme.colors['green-300']
        : theme.colors['red-300']};
    outline: none;
    svg {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  &[data-state='unchecked']:hover {
    transition: 0.2s;
    background: ${({ theme }) => theme.colors['gray-700']};
  }

  svg {
    color: ${({ theme, variant }) =>
      variant === 'income'
        ? theme.colors['green-300']
        : theme.colors['red-300']};
  }
`;
