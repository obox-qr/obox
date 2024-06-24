import dotenv from 'dotenv';

dotenv.config();

interface IConfig {
  apiUrl: string;
  dbConnectionString: string;
  jwtSecret: string;
  refreshSecret: string;
  accessExpiryHours: number;
  refreshExpiryHours: number;
}

export const Config: IConfig = {
  apiUrl: process.env.API_URL!,
  dbConnectionString: process.env.DB_CONNECTION_STRING!,
  jwtSecret: process.env.JWT_SECRET!,
  refreshSecret: process.env.REFRESH_SECRET!,
  accessExpiryHours: 1,
  refreshExpiryHours: 24,
}

console.log('API_URL:', process.env.API_URL);
console.log('DB_CONNECTION_STRING:', process.env.DB_CONNECTION_STRING);
console.log('JWT_SECRET:', process.env.JWT_SECRET);
console.log('REFRESH_SECRET:', process.env.REFRESH_SECRET);