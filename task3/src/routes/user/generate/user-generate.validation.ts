import * as Joi from 'joi';
import * as validate from 'express-joi-validator';

export default validate({
    body: {
        count: Joi.number().integer().positive()
    }
});

