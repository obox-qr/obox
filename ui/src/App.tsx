import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { config } from './config';

const { apiUrl } = config;

const healthCheckUrl = `${apiUrl}/health`;

const App: React.FC = () => {
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
      <h1>Добро пожаловать в OBOX</h1>
      <p>
        Статус API:{' '}
        <span style={{ color: apiStatus.status === 'UP' ? 'green' : 'red' }}>
          {apiStatus.status}
        </span>
      </p>
      <p>
        Статус БД:{' '}
        <span style={{ color: apiStatus.db === 'UP' ? 'green' : 'red' }}>
          {apiStatus.db}
        </span>
      </p>
    </>
  );
};

export default App;
