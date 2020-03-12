import * as express from 'express';
import userRouter from './user';
import groupRouter from './group';
import userGroup from './user-group';

const appRouter = express.Router();

appRouter.use('/user', userRouter);
appRouter.use('/group', groupRouter);
appRouter.use('/user-group', userGroup);

export default appRouter;
