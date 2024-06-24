import { Express, Request, Response } from 'express';
import { getDataSource } from "./db";

export const registerHealthChecks = (app: Express) => {
  app.get('/health', async (_req: Request, res: Response) => {
    try {
      const dataSource = getDataSource();

      if (!dataSource.isInitialized) {
        await dataSource.initialize();
      }

      await dataSource.query('SELECT 1');

      res.status(200).json({
        status: 'UP',
        db: 'UP',
      });
    } catch (e) {
      const error = e as Error;

      console.error('Health check failed:', error);
      res.status(500).json({
        status: 'DOWN',
        db: 'DOWN',
        error: error.message,
      });
    }
  });
}