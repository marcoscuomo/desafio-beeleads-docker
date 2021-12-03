import { Request, Response, NextFunction } from 'express';
import 'reflect-metadata';
import 'express-async-errors';
import express from 'express';

import createConnection from '@shared/infra/typeorm';
import '@shared/container';
import { router } from './routes';
import { AppError } from '@shared/errors/AppErrors';

createConnection();
const app = express();
app.use(express.json());
app.use(router);

app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
  if(err instanceof AppError){
      return response.status(err.statusCode).json({message: err.message});
  }

  return response.status(500).json({
      status: 'error',
      message: `Internal server error - ${err.message}`
  });
}); 

export { app }