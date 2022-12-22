import styled from 'styled-components';

export const FieldSearchContainer = styled.form`
  width: 100%;
  max-width: 70rem;
  display: flex;
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 0;
  gap: 1rem;
`;

export const InputSearch = styled.input`
  flex: 1;
  background: ${({ theme }) => theme.colors['gray-900']};
  color: ${({ theme }) => theme.colors['gray-100']};
  padding: 1rem 1rem;
  border: none;
  border-radius: 6px;

  &::placeholder {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['gray-500']};
  }
`;

export const ButtonFindTransaction = styled.button`
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;
  padding: 1rem 2rem;
  background: transparent;
  color: ${({ theme }) => theme.colors['green-300']};
  border: solid 1px ${({ theme }) => theme.colors['green-300']};
  border-radius: 6px;
  font-weight: bold;

  &:hover {
    transition: 0.4s;
    background: ${({ theme }) => theme.colors['green-500']};
    border-color: ${({ theme }) => theme.colors['green-500']};
    color: ${({ theme }) => theme.colors['gray-100']};
  }
`;
