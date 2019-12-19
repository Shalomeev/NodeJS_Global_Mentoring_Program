import * as express from 'express';
import { userDelete } from '../../controllers/index';
import validation from './user-delete.validation';


const route = express.Router();

route.delete('/:id', validation, userDelete);

export default route;
