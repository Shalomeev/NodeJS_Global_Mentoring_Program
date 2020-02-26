import * as express from 'express';
import { groupDelete } from '../../../controllers';
import validation from './group-delete.validation';


const route = express.Router();

route.delete('/:id', validation, groupDelete);

export default route;
