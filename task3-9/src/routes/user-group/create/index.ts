import * as express from 'express';
import { userGroupCreate } from '../../../controllers';
import validation from './user-group-create.validation';


const route = express.Router();

route.post('/', validation, userGroupCreate);

export default route;
