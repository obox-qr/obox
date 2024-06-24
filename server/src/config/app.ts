import express, { Express, urlencoded, json } from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { errorHandlingMiddleware } from '../middleware/error-handling';
import { RegisterRoutes } from "../config/routes";
import swaggerDoc from '../../swagger.json';
import { registerHealthChecks } from './health-check';

export const initApp = () => {
  const app: Express = express();

  const port = process.env.PORT || 3000;
  app.use(cors());

  app.use(
    urlencoded({
      extended: true,
    })
  );
  app.use(json());
  registerHealthChecks(app);

  RegisterRoutes(app);
  app.use(errorHandlingMiddleware);


  app.use(`/swagger`, swaggerUi.serve, swaggerUi.setup(swaggerDoc, { swaggerOptions: { docExpansion: 'none' } }));

  app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
  });
};