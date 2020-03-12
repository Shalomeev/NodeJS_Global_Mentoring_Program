import * as express from 'express';
import { groupCreate } from '../../../controllers';
import validation from './group-create.validation';


const route = express.Router();

route.post('/', validation, groupCreate);

export default route;
