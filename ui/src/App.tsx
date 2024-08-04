import { useTheme } from '@mui/material/styles';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import config from './config';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import AuthLayout from './components/layouts/AuthLayout.tsx';
import MainLayout from './components/layouts/MainLayout.tsx';
import AuthRoute from './components/routes/AuthRoute.tsx';
import MainRoute from './components/routes/MainRoute.tsx';
import NotFoundRoute from './components/routes/NotFoundRoute.tsx';

const { apiUrl } = config;

const healthCheckUrl = `${apiUrl}/health`;

export const App = () => {
  const theme = useTheme();
  const [apiStatus, setApiStatus] = useState({
    status: 'DOWN',
    db: 'DOWN',
  });
  useEffect(() => {
    if (!apiUrl) {
      setApiStatus({
        status: 'DOWN',
        db: 'DOWN',
      });
      return;
    }

    axios.get(healthCheckUrl).then(({ data }) => {
      setApiStatus(data);
    });
  }, []);

  return (
    <>
      <h1 style={{ color: theme.main.custom.greyGreenDarker }}>
        Welcome to OBOX
      </h1>
      <p style={{ color: theme.main.custom.greyGreenDarker }}>
        API status:{' '}
        <span style={{ color: apiStatus.status === 'UP' ? 'green' : 'red' }}>
          {apiStatus.status}
        </span>
      </p>
      <p style={{ color: theme.main.custom.greyGreenDarker }}>
        DB status:{' '}
        <span style={{ color: apiStatus.db === 'UP' ? 'green' : 'red' }}>
          {apiStatus.db}
        </span>
      </p>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<MainRoute />} />
          </Route>

          <Route element={<AuthLayout />}>
            <Route path="/auth" element={<AuthRoute />} />
          </Route>

          <Route path="/not-found" element={<NotFoundRoute />} />
          <Route path="*" element={<NotFoundRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
