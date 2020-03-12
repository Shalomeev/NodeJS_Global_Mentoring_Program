require('dotenv').config();

import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as HttpStatus from 'http-status-codes';

import appRouter from './routes';
import {
  requestsConsoleLogger,
  consoleErrorLogger,
  joiErrorHandler,
  sequelizeErrorHandler,
  errorHandler,
  winstonLogger,
  winstonErrorLogger
} from './middlewares';


const app = express();

// middleware
app.use(bodyParser());

// logs
app.use(requestsConsoleLogger);
app.use(winstonLogger);

// routes
app.use(appRouter);

// error handler
app.use(winstonErrorLogger);

process.on('uncaughtException', error => {
  consoleErrorLogger(error);
});

process.on('unhandledRejection', error => {
  consoleErrorLogger(error);
});


app.use(joiErrorHandler);
app.use(sequelizeErrorHandler);
app.use(errorHandler);

// 404
app.use((req, res, next) => {
  res.status(HttpStatus.NOT_FOUND).send('route not found');
  next();
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Example app listening on port 3000!');
});
