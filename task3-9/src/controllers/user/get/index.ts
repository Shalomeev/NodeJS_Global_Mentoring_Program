import { User } from '../../../models';
import { processResults } from '../../../middlewares';

const userGet = async (req) => User.findByPk(req.params.id);

export default processResults(userGet);

