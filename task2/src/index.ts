import * as express from 'express';
import {
  userCreateRouter
} from './routes';

const app = express();

app.use('/user', userCreateRouter);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
