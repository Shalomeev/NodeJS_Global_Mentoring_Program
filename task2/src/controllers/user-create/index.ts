import * as HttpStatus from 'http-status-codes';
import BdAPI from '../../bd';

const userCreate = (req, res, next) => {
    const { login, password, age } = req.body;
    const user = BdAPI.add({
        login,
        password,
        age,
        isDeleted: false
    });

    if (user) {
        res.send(user);
    } else {
        res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ error: 'Something failed!' });
    }
    next();
};

export default userCreate;

