import { User, Group } from '../../../models';
import { processResults } from '../../../utils';

const userGroupCreate = async (req) => {
  const { userId, groupId } = req.body;
  const [group, user] = await Promise.all([
    Group.findByPk(groupId),
    User.findByPk(userId),
  ]);

  return group.addUser(user);
};

export default processResults(userGroupCreate);

