import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { config } from './config';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MainRoute from './routes/MainRoute';
import AuthLayout from './layouts/AuthLayout';
import AuthRoute from './routes/AuthRoute';
import NotFoundRoute from './routes/NotFoundRoute';



const { apiUrl } = config;

const healthCheckUrl = `${apiUrl}/health`;

export const App = () => {
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
      <p>API status: <span style={{'color': apiStatus.status === 'UP' ? 'green' : 'red'}}>{apiStatus.status}</span></p>
      <p>DB status: <span style={{'color': apiStatus.db === 'UP' ? 'green' : 'red'}}>{apiStatus.db}</span></p>
      
    <BrowserRouter>
      <Routes>

        <Route  element={<MainLayout/> }>
        <Route path="/" element={<MainRoute />}/>
        </Route>

        <Route  element={<AuthLayout/> }>
        <Route path="/auth" element={<AuthRoute />}/>
        </Route>

        <Route path="/not-found" element={<NotFoundRoute />} />
        <Route path="*" element={<NotFoundRoute />} />

      </Routes>
    </BrowserRouter>
    
    
    </>
  );
};
