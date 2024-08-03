import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ThemeProvider } from '@mui/material/styles';
import { App } from './App';
import GlobalStyles from './styles/GlobalStyles.tsx';
import theme from './styles/theme.ts';
import './index.css';

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ThemeProvider theme={theme}>
        <GlobalStyles theme={theme} />
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
