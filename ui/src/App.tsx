import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ApiService, { ServicesNames } from './api';
import { HealthCheckApiInterface } from './api/services/healthcheck-api';
import './App.css';

import * as Layouts from './components/layouts';
import * as MyRoutes from './components/routes';

const initStatusState = {
  status: 'down',
  db: 'down',
};

export const App = () => {
  const [apiStatus, setApiStatus] = useState(initStatusState);

  const theme = useTheme();

  useEffect(() => {
    ApiService.getService<HealthCheckApiInterface>(ServicesNames.HEALTHCHECK)
      .healthCheck()
      .then(({ data }) => {
        const { details } = data;
        setApiStatus({
          status: details['nestjs-docs']?.status ?? initStatusState.status,
          db: details.database?.status ?? initStatusState.db,
        });
      });
  }, []);

  return (
    <>
      <h1 style={{ color: theme.main.custom.greyGreenDarker }}>
        Welcome to OBOX
      </h1>
      <p
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '5px',
          color: theme.main.custom.greyGreenDarker,
        }}
      >
        <span>API status:</span>
        <span
          style={{
            color: apiStatus.status === 'up' ? 'green' : 'red',
            textTransform: 'uppercase',
            color: theme.main.custom.greyGreenDarker,
          }}
        >
          {apiStatus.status}
        </span>
      </p>
      <p
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '5px',
          color: theme.main.custom.greyGreenDarker,
        }}
      >
        <span style={{ color: theme.main.custom.greyGreenDarker }}>
          DB status:
        </span>
        <span
          style={{
            color: apiStatus.db === 'up' ? 'green' : 'red',
            textTransform: 'uppercase',
          }}
        >
          {apiStatus.db}
        </span>
      </p>

      <BrowserRouter>
        <Routes>
          <Route element={<Layouts.MainLayout />}>
            <Route path="/" element={<MyRoutes.MainRoute />} />
          </Route>
          <Route element={<Layouts.AuthLayout />}>
            <Route path="/auth" element={<MyRoutes.AuthRoute />} />
          </Route>

          <Route path="/not-found" element={<MyRoutes.NotFoundRoute />} />
          <Route path="*" element={<MyRoutes.NotFoundRoute />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
