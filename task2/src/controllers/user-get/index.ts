import BdAPI from '../../bd';

const userGet = (req, res, next) => {
    const { id } = req.params;
    const user = BdAPI.get(id);

    if (user) {
        res.send(user);
    } else {
        res.status(404).send({ error: 'User not found!' });
    }
    next();
};

export default userGet;

