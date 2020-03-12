import * as validate from 'express-joi-validator';
import { GroupNameValidator, PermissionsValidator } from '../../../core/validators';

export default validate({
  body: {
    name: GroupNameValidator,
    permissions: PermissionsValidator
  }
});
