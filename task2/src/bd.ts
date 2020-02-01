import { User, Id } from './core/types'; // eslint-disable-line

interface BdInterface {
  [key: string]: User
}

const usersBd = () => {
    const users: BdInterface = {};
    let unique_id: number = 0;

    return {
        add: (user: User): User => {
            const newUser = { ...user, id: String(unique_id) };
            users[unique_id] = newUser;
            unique_id++;
            return { ...newUser };
        },
        get: (id: Id): User | void => {
            if (users[id]) return users[id];
        },
        update: (id: Id, newData: User): User => {
            if (!users[id]) return;

            const newUser = { ...newData };
            delete newUser.id; // avoid changing id

            users[id] = { ...users[id], ...newUser };
            return { ...users[id] };
        },
        findUser: (search: (user: User) => boolean) => {
            return Object.values(users).filter(search); // Deep клонирование не хочу заморачиваться :(
        }
    };
};

const BdAPI = usersBd();

export default BdAPI;
