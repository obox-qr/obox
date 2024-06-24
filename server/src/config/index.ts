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