import * as express from 'express';
import { groupGet } from '../../../controllers';
import validation from './group-get.validation';


const route = express.Router();

route.get('/:id(\\d+)/', validation, groupGet);

export default route;

