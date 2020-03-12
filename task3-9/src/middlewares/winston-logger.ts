import * as appRoot from 'app-root-path';
import * as winston from 'winston';
import * as expressWinston from 'express-winston';

const { colorize, json, prettyPrint, timestamp, printf, combine } = winston.format;

export const winstonLogger = expressWinston.logger({
  transports: [
    new winston.transports.Console({
      format: combine(
        colorize({ all: true }),
        json(),
        prettyPrint(),
        timestamp(),
        printf(info => `${info.timestamp} [${info.level}]: ${info.message}`),
      )
    })
  ]
});

export const winstonErrorLogger = expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      format: combine(
        colorize({ all: true }),
        json(),
        prettyPrint(),
        timestamp(),
        printf(info => `${info.timestamp} [${info.level}]: ${JSON.stringify(info, null, 2)}`),
      )
    }),
    new winston.transports.File({
      filename: `${appRoot}/logs.log`
    })
  ]
});
