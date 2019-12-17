import { User, Id } from './core/types'

interface BdInterface {
  [key: string]: User
}

const usersBd = () => {
  const users: BdInterface = {};

  return {
    add: (id: Id, user: User): void => {
      users[id] = user;
    },
    get: (id: Id): User => {
      return users[id];
    },
    update: (id: Id, newData: User): void => {
      users[id] = { ...users[id], ...newData };
    },
    findUser: (search: () => boolean) => {
      return Object.values(users).filter(search); // Deep клонирование не хочу заморачиваться :(
    },
  };
};

export default usersBd();
