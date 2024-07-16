import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import ApiService from './api/index.ts';
import config from './config';

const { apiUrl } = config;

const healthCheckUrl = `${apiUrl}/health`;

async function userQuery() {
	const res = await ApiService.getAuthApi().getUser('https://jsonplaceholder.typicode.com/users/1');
	return res.data;
}

export const App = () => {
	const { data } = useQuery({
		queryKey: ['getUser'],
		queryFn: userQuery
	})
  const [apiStatus, setApiStatus] = useState({
    status: 'DOWN',
    db: 'DOWN',
  });

	console.log(data)

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
      <h1>Добро пожаловать в OBOX </h1>
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
