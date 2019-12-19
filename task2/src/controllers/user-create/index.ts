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
        res.status(500).send({ error: 'Something failed!' });
    }
    next();
};

export default userCreate;

