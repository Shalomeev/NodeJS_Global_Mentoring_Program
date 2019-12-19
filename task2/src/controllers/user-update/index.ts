import BdAPI from '../../bd';

const userUpdate = (req, res, next) => {
    const { id } = req.params;
    const user = BdAPI.update(id, req.body);

    if (user) {
        res.send(user);
    } else {
        res.status(404).send({ error: 'User not found!' });
    }
    next();
};

export default userUpdate;

