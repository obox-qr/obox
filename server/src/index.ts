import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import { setupSwagger } from './swagger';

const app: Express = express();

const port = process.env.PORT || 3000;
app.use(cors());

setupSwagger(app);

app.get("/", (req: Request, res: Response) => {
  res.send("Hosted on Render with Typescript based Express Server!");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
