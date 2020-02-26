import { PERMISSIONS } from './constants';

export type Id = string;
export type Login = string;
export type Password = string;
export type Age = number;
export type IsDeleted = boolean;

export interface User {
  id?: Id,
  login?: Login,
  password?: Password,
  age?: Age,
  isDeleted?: IsDeleted,
  [key: string]: any,
}

export type Permission = keyof typeof PERMISSIONS;
