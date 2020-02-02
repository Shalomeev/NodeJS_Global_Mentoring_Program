import * as validate from 'express-joi-validator';
import { PasswordValidator, LoginValidator, AgeValidator } from '../../core/validators';

export default validate({
    body: {
        password: PasswordValidator,
        login: LoginValidator,
        age: AgeValidator
    }
});
