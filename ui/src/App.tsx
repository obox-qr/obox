import { useEffect, useState } from 'react';
import ApiService from './api';
import { useGetUser } from './api/hooks';
import { getUser } from './api/fetch-func/user';
import './App.css';

export const App = () => {
  const [apiStatus, setApiStatus] = useState({
    status: 'down',
    db: 'down',
  });

  const { data } = useGetUser('getUser', getUser);

  useEffect(() => {
    ApiService.getHealthCheckApi()
      .healthCheck()
      .then(({ data }) => {
        const { details } = data;
        setApiStatus({
          status: details['nestjs-docs'].status,
          db: details.database.status,
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
