import * as validate from 'express-joi-validator';
import { IdValidator } from '../../../core/validators';

export default validate({
    params: {
        id: IdValidator.required()
    }
});
