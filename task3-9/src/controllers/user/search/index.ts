import { Op } from 'sequelize';
import { User } from '../../../models';
import { processResults } from '../../../utils';

const USER_SEARCH_LIMIT = 10;

const userSearch = async (req) => {
  const { login, limit = USER_SEARCH_LIMIT } = req.query;

  const users = await User.findAll({
    where: {
      login: {
        [Op.like]: `%${login}%`
      },
      isDeleted: {
        [Op.not]: true
      }
    },
    limit
  });

  return {
    total: users.length,
    users
  };
};

export default processResults(userSearch);
