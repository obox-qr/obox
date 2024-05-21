import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { config } from './config';

const { apiUrl } = config;

export const App = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (!apiUrl) {
      setMessage('ApiUrl is not defined');
      return;
    }

    axios.get(apiUrl).then(({ data }) => {
      setMessage(data);
    });
  }, []);

  return (
    <>
      <h1>Welcome to OBOX</h1>
      <p>{message}</p>
    </>
  );
};
