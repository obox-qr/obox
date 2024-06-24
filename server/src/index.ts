import 'reflect-metadata';

import { createDatabaseConnection } from './config/db';
import { initApp } from './config/app';

const catchDatabaseConnectionError = (err: Error) => {
  console.error('Error during Data Source initialization:', err);
};

createDatabaseConnection(initApp, catchDatabaseConnectionError);