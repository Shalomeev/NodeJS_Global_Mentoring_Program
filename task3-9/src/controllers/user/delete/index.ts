import { User } from '../../../models';
import { processResults } from '../../../utils';
import { SUCCESS, FAIL } from '../../../core/constants';

const userDelete = async (req) => {
  const { id } = req.params;

  const result = await User.update(
    { isDeleted: true },
    {
      where: { id }
    }
  );

  return result[0] ? SUCCESS : FAIL;
};

export default processResults(userDelete);
