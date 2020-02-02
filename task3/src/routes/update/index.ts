import * as express from 'express';
import { userUpdate } from '../../controllers';
import validation from './user-update.validation';


const route = express.Router();

route.patch('/:id', validation, userUpdate);

export default route;
