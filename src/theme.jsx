import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  fontFamily: 'Roboto, sans-serif',
  mainColors: {
    blue: '#2400ff',
    hotred: '#E50914',
    gray: '#c6c6c6',
    dark: '#474747',
  },
};

const GlobalStyles = createGlobalStyle`
    body {
      font-family: ${({ theme }) => theme.fontFamily};
      font-size: 18px;
      margin: 0;
      padding-top: 40px;
      padding-left: 15px;
      padding-right: 15px;
      background-color: black;
      color: white;
    }
  `;

export const GlobalTheme = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};