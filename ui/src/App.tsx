import { useEffect, useState } from 'react';
import ApiService, { ServicesNames } from './api';
import { HealthCheckApiInterface } from './api/services/healthcheck-api';
import './App.css';

const initStatusState = {
  status: 'down',
  db: 'down',
};

export const App = () => {
  const [apiStatus, setApiStatus] = useState(initStatusState);

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
      <h1>Welcome to OBOX</h1>
      <p style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
        <span>API status:</span>
        <span
          style={{
            color: apiStatus.status === 'up' ? 'green' : 'red',
            textTransform: 'uppercase',
          }}
        >
          {apiStatus.status}
        </span>
      </p>
      <p style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
        <span>DB status:</span>
        <span
          style={{
            color: apiStatus.db === 'up' ? 'green' : 'red',
            textTransform: 'uppercase',
          }}
        >
          {apiStatus.db}
        </span>
      </p>
    </>
  );
};
