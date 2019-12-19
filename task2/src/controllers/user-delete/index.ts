import BdAPI from '../../bd';

const userDelete = (req, res, next) => {
    const { id } = req.params;
    const user = BdAPI.update(id, { isDeleted: true });

    if (user) {
        res.send(user);
    } else {
        res.status(404).send({ error: 'User not found!' });
    }
    next();
};

export default userDelete;
