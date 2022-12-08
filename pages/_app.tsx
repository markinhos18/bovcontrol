import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";


const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

  :root {
    font-size: 16px;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #fafafa;
    font-family: 'Roboto', sans-serif;
  }

  a img { 
    border: none;
    outline: none;
  }

  
`;

const theme = {
  colors: {
    primary: "#F24B34",
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
        <ThemeProvider theme={theme}>

          <Component {...pageProps} />
        </ThemeProvider>    
    </>
  );
}

export default MyApp;
