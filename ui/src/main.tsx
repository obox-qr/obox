import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { App } from './App';
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle.ts";
import theme from "./styles/theme.ts";
import './index.css';

const client = new QueryClient();;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
		<QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
