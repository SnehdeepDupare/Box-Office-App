import { ThemeProvider, createGlobalStyle } from 'styled-components';

const theme = {
  fontFamily: 'Roboto, sans-serif',
  mainColors: {
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
    &::-webkit-scrollbar{
      width: 10px;
    }    
    &::-webkit-scrollbar-thumb{
      background-color: ${({ theme }) => theme.mainColors.hotred};
      border-radius: 10px;
    }   
    &::-webkit-scrollbar-thumb:hover{
      background-color: #970209;
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
