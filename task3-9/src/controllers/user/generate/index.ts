import { User } from '../../../models';
import { processResults, generateUsers } from '../../../utils';

const DEFAULT_GENERATE_COUNT = 100;

const userGenerate = (req) => {
  const { count = DEFAULT_GENERATE_COUNT } = req.body;

  const fakeUsers = generateUsers(count);
  return User.bulkCreate(fakeUsers);
};

export default processResults(userGenerate);

