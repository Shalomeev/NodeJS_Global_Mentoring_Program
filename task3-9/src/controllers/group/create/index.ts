import { Group } from '../../../models';
import { processResults } from '../../../middlewares';

const groupCreate = (req) => {
  const { name, permissions } = req.body;

  return Group.create({
    name,
    permissions
  });
};

export default processResults(groupCreate);
