import * as HttpStatus from 'http-status-codes';
import BdAPI from '../../bd';

const USER_SEARCH_LIMIT = 10;

const finder = login => user => {
    if (user.isDeleted) return;
    return user.login.includes(login);
};

const userSearch = (req, res, next) => {
    const { login, limit = USER_SEARCH_LIMIT } = req.query;

    const find = finder(login);
    const users = BdAPI.findUser(find).slice(0, limit);

    if (users) {
        res.send({
            users,
            total: users.length
        });
    } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: 'Something failed!' });
    }
    next();
};

export default userSearch;
