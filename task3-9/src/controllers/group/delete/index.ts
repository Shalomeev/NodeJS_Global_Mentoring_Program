import { Group } from '../../../models';
import { processResults } from '../../../utils';
import { SUCCESS, FAIL } from '../../../core/constants';

const groupDelete = async (req) => {
  const { id } = req.params;
  const result =  await Group.destroy({
    where: { id }
  });

  return result ? SUCCESS : FAIL;
};

export default processResults(groupDelete);
