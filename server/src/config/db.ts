import path from 'path';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as PostgressConnectionStringParser from 'pg-connection-string';

import { Config } from '.';

const getDbConfig = (): DataSourceOptions => {
  const databaseUrl: string = Config.dbConnectionString || '';
  const connectionOptions = PostgressConnectionStringParser.parse(databaseUrl);

  const entities = [path.join(__dirname, '../entities/**/*.model.ts')];
  
  connectionOptions.port = '5432';
  
  const typeOrmOptions: DataSourceOptions = {
    type: 'postgres',
    host: connectionOptions.host || '',
    port: parseInt(connectionOptions.port, 10),
    username: connectionOptions.user,
    password: connectionOptions.password,
    database: connectionOptions.database || '',
    entities,
    synchronize: true,
    ssl: {
      rejectUnauthorized: false,
    },
  };

  return typeOrmOptions;
}


const AppDataSource = new DataSource(getDbConfig());

export const getDataSource = () => AppDataSource;

export const createDatabaseConnection = (onSuccess: () => void, onError: (err: Error) => void) => {
  getDataSource().initialize().then(onSuccess).catch(onError);
}


