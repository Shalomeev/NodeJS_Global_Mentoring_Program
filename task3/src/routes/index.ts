import * as express from 'express';
import userRouter from './user';

const appRouter = express.Router();

appRouter.use('/user', userRouter);

export default appRouter;
