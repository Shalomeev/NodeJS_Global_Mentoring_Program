import { User } from '../../models';
import { processResults } from '../../utils';

const userGet = async (req) => User.findByPk(req.params.id);

export default processResults(userGet);

