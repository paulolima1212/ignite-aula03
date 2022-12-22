import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './Styles/Theme/defaultTheme';
import { Router } from './Routes';
import { GlobalStyle } from './Styles/global';
import { BrowserRouter } from 'react-router-dom';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  );
}
