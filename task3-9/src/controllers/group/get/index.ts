import { Group } from '../../../models';
import { processResults } from '../../../utils';

const groupGet = async (req) => Group.findByPk(req.params.id);

export default processResults(groupGet);
