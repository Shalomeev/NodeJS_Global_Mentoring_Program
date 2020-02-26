import { Group } from '../../../models';
import { processResults } from '../../../utils';

const ELEMENTS_ON_PAGE = 10;
const PAGE_NUMBER = 1;

const groupList = async (req) => {
  const { limit = ELEMENTS_ON_PAGE, page = PAGE_NUMBER } = req.query;

  const groups = await Group.findAll({
    limit,
    offset: limit * (page - 1),
  });

  return {
    total: groups.length,
    groups,
  };
};

export default processResults(groupList);
