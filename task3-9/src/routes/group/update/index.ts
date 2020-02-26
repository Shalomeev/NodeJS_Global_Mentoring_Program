import * as express from 'express';
import { groupUpdate } from '../../../controllers';
import validation from './group-update.validation';


const route = express.Router();

route.patch('/:id', validation, groupUpdate);

export default route;
