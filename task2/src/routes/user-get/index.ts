import * as express from 'express';
import { userGet } from '../../controllers/index';
import validation from './user-get.validation';


const route = express.Router();

route.get('/:id(\\d+)/', validation, userGet);

export default route;

