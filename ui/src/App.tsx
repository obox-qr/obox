import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

const apiUrl = 'http://localhost:3000';

console.log('API URL', apiUrl);


export const App = () => {
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (!apiUrl) {
      setMessage('ApiUrl is not defined');
      return;
    }

    axios.get(apiUrl).then(({ data }) => {
      console.log('apiUrl', apiUrl);

      console.log(data);

      setMessage(data);
    });
  }, []);

  return (
    <>
      <h1>Welcome message qwe: {message}</h1>
    </>
  );
};
