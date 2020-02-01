import * as express from 'express';
import { userCreate } from '../../controllers/index';
import validation from './user-create.validation';

const route = express.Router();

route.post('/', validation, userCreate);

export default route;

