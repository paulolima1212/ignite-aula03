import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors['gray-900']};
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2.5rem 0 7.5rem 0;
`;

export const HeaderContent = styled.div`
  max-width: 70rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.5rem;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;

export const ButtonNewTrasaction = styled.button.attrs({
  type: 'button',
})`
  background: ${({ theme }) => theme.colors['green-500']};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.75rem 1.25rem;
  border: none;
  border-radius: 6px;
  font-weight: bold;

  &:hover {
    background: ${({ theme }) => theme.colors['green-700']};
    transition: 0.4s;
  }
`;
