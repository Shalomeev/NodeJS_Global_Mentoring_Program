import { User } from '../../../models';
import { processResults } from '../../../middlewares';

const userCreate = (req) => {
  const { login, password, age } = req.body;

  return User.create({
    login,
    password,
    age,
    isDeleted: false
  });
};

export default processResults(userCreate);

