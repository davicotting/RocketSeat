  import React from 'react'
  import ReactDOM from 'react-dom/client'
  import { Routes } from './routes'
  import { ThemeProvider } from 'styled-components';
  import theme from './theme/theme';
  import GlobalStyles  from './theme/global';

  import { myContext } from './myContext';

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
      <GlobalStyles/>
        <myContext.Provider value={{email: "davicotting@gmail.com", password: "cotting123"}}>
         <Routes/>
        </myContext.Provider>
      </ThemeProvider>
    </React.StrictMode>,
  )
