import * as express from 'express';
import userGroupCreateRoute from './create';

const userGroupRouter = express.Router();

userGroupRouter.use(userGroupCreateRoute);


export default userGroupRouter;
