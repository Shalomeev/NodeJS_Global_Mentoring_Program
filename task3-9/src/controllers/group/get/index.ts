import { Group } from '../../../models';
import { processResults } from '../../../middlewares';

const groupGet = (req) => Group.findByPk(req.params.id);

export default processResults(groupGet);
