import { Group } from '../../../models';
import { processResults } from '../../../middlewares';

const groupUpdate = async (req) => {
  const { id } = req.params;

  const result = await Group.update(
    req.body,
    {
      where: { id },
      returning: true
    });

  return result[1][0];
};

export default processResults(groupUpdate);
