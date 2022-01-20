import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { config } from './config.js';
import { initSocket } from './socket/initSocket.js';
import { sequelize } from './database/database.js';

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
}

app.use(express.json());
app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan('tiny'));


app.use((request, response, next) => {
  response.sendStatus(404);
});

app.use((error, request, response, next) => {
  console.error(error);
  res.sendStatus(500);
});

sequelize.sync().then(() => {
  const server = app.listen(config.host.port);
  initSocket(server);
});