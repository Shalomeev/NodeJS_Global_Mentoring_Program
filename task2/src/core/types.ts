export type Id = string;
export type Login = string;
export type Password = string;
export type Age = string;
export type IsDeleted = boolean;

export interface User {
  id?: Id,
  login?: Login,
  password?: Password,
  age?: Age,
  isDeleted?: IsDeleted,
}
