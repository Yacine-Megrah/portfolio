import path, { dirname } from 'path';
import express, { Express, Application, Request, Response } from 'express';

const app : Application = express();
const port = 3050;
const pj = path.join;

app.use('/', express.static(pj(dirname(__dirname), 'public')));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
