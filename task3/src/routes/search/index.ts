import * as express from 'express';
import { userSearch } from '../../controllers';
import validation from './user-search.validation';


const route = express.Router();

route.get('/search', validation, userSearch);

export default route;
