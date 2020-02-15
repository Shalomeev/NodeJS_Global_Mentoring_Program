import * as express from 'express';
import { userGenerate } from '../../../controllers';
import validation from './user-generate.validation';


const route = express.Router();

route.post('/generate', validation, userGenerate);

export default route;

