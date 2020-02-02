import * as express from 'express';
import userCreateRouter from './create';
import userGetRouter from './get';
import userDeleteRouter from './delete';
import userUpdateRouter from './update';
import userSearchRouter from './search';
import userGenerateRouter from './generate';

export const userRouter = express.Router();

userRouter.use(userCreateRouter);
userRouter.use(userGetRouter);
userRouter.use(userDeleteRouter);
userRouter.use(userUpdateRouter);
userRouter.use(userSearchRouter);
userRouter.use(userGenerateRouter);
