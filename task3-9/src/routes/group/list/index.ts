import * as express from 'express';
import { groupList } from '../../../controllers';
import validation from './group-list.validation';


const route = express.Router();

route.get('/list', validation, groupList);

export default route;
