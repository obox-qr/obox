import { Request, Response, NextFunction } from 'express';
import { NotFoundError } from '../utils/error-builder';

export const errorHandlingMiddleware = (err: Error, req: Request, res: Response, _next: NextFunction): void => {
  if (err instanceof NotFoundError) {
    res.status(err.status).json({
      message: err.message,
      details: err.cause,
    });
    return;
  }

  const status = 500;

  res.status(status);
  res.json({ message: err.message });
};
