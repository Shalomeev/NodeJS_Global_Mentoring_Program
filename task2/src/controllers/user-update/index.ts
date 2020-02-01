import * as HttpStatus from 'http-status-codes';
import BdAPI from '../../bd';

const userUpdate = (req, res, next) => {
    const { id } = req.params;
    const user = BdAPI.update(id, req.body);

    if (user) {
        res.send(user);
    } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: 'User not found!' });
    }
    next();
};

export default userUpdate;

