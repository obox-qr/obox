import { useEffect, useState } from 'react';
import axios from 'axios';
import config from './config';

import './App.css';

const { apiUrl } = config;

const healthCheckUrl = `${apiUrl}/health`;

const App = () => {
  const [apiStatus, setApiStatus] = useState({
    status: 'down',
    db: 'down',
  });

  useEffect(() => {
    if (!apiUrl) {
      setApiStatus({
        status: 'down',
        db: 'down',
      });
      return;
    }

    axios.get(healthCheckUrl).then(({ data }) => {
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
        <span style={{ color: apiStatus.status === 'up' ? 'green' : 'red', textTransform: 'uppercase' }}>
          {apiStatus.status}
        </span>
      </p>
      <p style={{ display: 'flex', justifyContent: 'center', gap: '5px' }}>
        <span>DB status:</span>
        <span style={{ color: apiStatus.db === 'up' ? 'green' : 'red', textTransform: 'uppercase' }}>
          {apiStatus.db}
        </span>
      </p>
    </>
  );
};

export default App;