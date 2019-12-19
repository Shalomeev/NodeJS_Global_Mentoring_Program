import * as express from 'express';
import * as bodyParser from 'body-parser';

import { userRouter } from './routes/index';
import BdAPI from './bd';
import { generateUsers } from './utils/index';

// Fill BD with fake users
const users = generateUsers(100);

users.forEach(user => {
    BdAPI.add(user);
});


const app = express();

// middleware
app.use(bodyParser());

// routes
app.use('/user', userRouter);

app.use((err, req, res, next) => {
    if (err && err.isBoom) { // need to set good handler for joi errors, but now don't have time
        res.status(400).json(err.output);
    } else {
        next(err); // eslint-disable-line
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Example app listening on port 3000!');
});
