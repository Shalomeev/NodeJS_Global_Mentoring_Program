import * as Joi from 'joi';

export const LoginValidator = Joi.string();
export const PasswordValidator = Joi.string().alphanum();
export const AgeValidator = Joi.number().integer().min(4).max(130);
export const IdValidator = Joi.number().integer();
