import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as HttpStatus from 'http-status-codes';

import { userRouter } from './routes';
import { joiErrorHandler, sequelizeErrorHandler, errorHandler } from './utils';

const app = express();

// middleware
app.use(bodyParser());

// routes
app.use('/user', userRouter);

// error handler
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
