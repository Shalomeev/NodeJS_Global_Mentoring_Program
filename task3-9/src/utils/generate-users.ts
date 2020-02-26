import { User } from '../core/types'; // eslint-disable-line

const generateUsers = (count: number): User[] => {
  const users = new Array(count).fill({});
  return users.map((user, index) => {
    return ({
      login: `user${index}`,
      password: `user${index}`,
      age: 20 + index,
      isDeleted: false
    });
  });
};

export default generateUsers;
