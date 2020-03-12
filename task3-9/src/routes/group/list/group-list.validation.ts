import * as Joi from 'joi';
import * as validate from 'express-joi-validator';

export default validate({
  query: {
    limit: Joi.number(),
    page: Joi.number()
  }
});
