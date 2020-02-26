import * as express from 'express';
import groupCreateRouter from './create';
import groupGetRouter from './get';
import groupDeleteRouter from './delete';
import groupList from './list';
import groupUpdate from './update';

const groupRouter = express.Router();

groupRouter.use(groupCreateRouter);
groupRouter.use(groupGetRouter);
groupRouter.use(groupDeleteRouter);
groupRouter.use(groupList);
groupRouter.use(groupUpdate);


export default groupRouter;
