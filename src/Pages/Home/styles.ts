import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  h1 {
    font-size: ${({ theme }) => theme.textSizes['title-l']};
  }
`;
