import 'dotenv/config';
import path from 'path';
import express, { Express, Application, Request, Response } from 'express';

const CWD = process.cwd();
const { PORT, HOST } = process.env;

const app : Application = express();

app.use('/', express.static(path.join(CWD, 'public')));

app.listen(PORT, () => {
  console.log(`Example app listening at http://${HOST}:${PORT}`);
});
