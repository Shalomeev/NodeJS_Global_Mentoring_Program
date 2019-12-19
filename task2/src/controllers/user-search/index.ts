import BdAPI from '../../bd';

const finder = login => user => {
    if (user.isDeleted) return;
    return user.login.includes(login);
};

const userSearch = (req, res, next) => {
    const { login, limit = 10 } = req.query;

    const find = finder(login);
    const users = BdAPI.findUser(find).slice(0, limit);

    if (users) {
        res.send({
            users,
            total: users.length
        });
    } else {
        res.status(500).send({ error: 'Something failed!' });
    }
    next();
};

export default userSearch;
