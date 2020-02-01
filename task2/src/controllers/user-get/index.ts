import * as HttpStatus from 'http-status-codes';
import BdAPI from '../../bd';

const userGet = (req, res, next) => {
    const { id } = req.params;
    const user = BdAPI.get(id);

    if (user) {
        res.send(user);
    } else {
        res.status(HttpStatus.NOT_FOUND).send({ error: 'User not found!' });
    }
    next();
};

export default userGet;

