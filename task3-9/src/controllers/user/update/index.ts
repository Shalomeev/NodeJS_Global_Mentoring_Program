import { User } from '../../../models';
import { processResults } from '../../../middlewares';

const userUpdate = async (req) => {
  const { id } = req.params;

  const result = await User.update(
    req.body,
    {
      where: { id },
      returning: true
    });

  return result[1][0];
};

export default processResults(userUpdate);

