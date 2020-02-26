import * as Joi from 'joi';
import { PERMISSIONS } from './constants';

export const LoginValidator = Joi.string();
export const PasswordValidator = Joi.string().alphanum();
export const AgeValidator = Joi.number().integer().min(4).max(130);
export const IdValidator = Joi.number().integer();

export const GroupNameValidator = Joi.string();
export const PermissionValidator = Joi.string().only(PERMISSIONS);
export const PermissionsValidator = Joi.array().min(1).unique().items(PermissionValidator);
