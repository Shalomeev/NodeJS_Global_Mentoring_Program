import * as HttpStatus from 'http-status-codes';

export const joiErrorHandler = (err, req, res, next) => {
  if (err && err.isBoom) {
    return res.status(HttpStatus.BAD_REQUEST).json(err.output.payload.message);
  }
  next(err);
};

export const sequelizeErrorHandler = (err, req, res, next) => {
  if (err && err.name === 'SequelizeUniqueConstraintError') {
    return res.status(HttpStatus.BAD_REQUEST).send(err.errors[0].message);
  }
  next(err);
};

export const errorHandler = (err, req, res, next) => {
  if (err) {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: err });
  }
  next();
};

