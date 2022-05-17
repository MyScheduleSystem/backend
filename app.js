import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { config } from './config.js';
import { initSocket } from './socket/initSocket.js';
import { sequelize } from './database/database.js';
import userRouter from './router/userRouter.js';
import containerRouter from './router/containerRouter.js';
import calendarRouter from './router/calendarRouter.js';

const app = express();
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
}

app.use(express.json());
app.use(helmet());
app.use(cors(corsOptions));
app.use(morgan('tiny'));

app.use('/user', userRouter);
app.use('/container', containerRouter);
app.use('/schedule', calendarRouter);

app.use((error, request, response, next) => {
  console.error(error);
  response.sendStatus(500);
});

sequelize.sync().then(() => {
  const server = app.listen(config.host.port);
  initSocket(server);
});