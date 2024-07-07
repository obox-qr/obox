import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { config } from './config';

const { apiUrl } = config;

const healthCheckUrl = `${apiUrl}/health`;

export function App() {
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
      <h1>Welcome to OBOX</h1>
      <p>
        API status:{' '}
        <span style={{ color: apiStatus.status === 'UP' ? 'green' : 'red' }}>
          {apiStatus.status}
        </span>
      </p>
      <p>
        DB status:{' '}
        <span style={{ color: apiStatus.db === 'UP' ? 'green' : 'red' }}>
          {apiStatus.db}
        </span>
      </p>
    </>
  );
}

let s = ['e', [re]];
