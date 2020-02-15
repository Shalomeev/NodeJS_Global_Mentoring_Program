import * as Joi from 'joi';
import * as validate from 'express-joi-validator';
import { LoginValidator } from '../../../core/validators';

export default validate({
    query: {
        login: LoginValidator,
        limit: Joi.number().integer().positive()
    }
});
