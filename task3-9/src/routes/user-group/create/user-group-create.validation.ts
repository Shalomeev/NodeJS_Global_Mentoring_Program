import * as validate from 'express-joi-validator';
import { IdValidator } from '../../../core/validators';

export default validate({
  body: {
    userId: IdValidator.required(),
    groupId: IdValidator.required()
  }
});
