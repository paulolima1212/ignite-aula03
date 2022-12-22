import styled, { css } from 'styled-components';

export const SumaryContainer = styled.section`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  margin-top: -5rem;

  justify-content: center;
  align-items: center;
`;

interface SumaryCardContainerProps {
  variant?: 'green' | null;
}

export const SumaryCardContainer = styled.div<SumaryCardContainerProps>`
  background: ${({ theme }) => theme.colors['gray-600']};
  border-radius: 6px;
  padding: 2rem;

  ${({ theme, variant }) =>
    variant === 'green' &&
    css`
      background: ${theme.colors['green-700']};
    `};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors['gray-300']};
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }
`;
