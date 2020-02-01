import * as express from 'express';
import userCreateRouter from './user-create/index';
import userGetRouter from './user-get/index';
import userDeleteRouter from './user-delete/index';
import userUpdateRouter from './user-update/index';
import userSearchRouter from './user-search/index';

const userRouter = express.Router();

userRouter.use(userCreateRouter);
userRouter.use(userGetRouter);
userRouter.use(userDeleteRouter);
userRouter.use(userUpdateRouter);
userRouter.use(userSearchRouter);

export {
    userRouter
};
