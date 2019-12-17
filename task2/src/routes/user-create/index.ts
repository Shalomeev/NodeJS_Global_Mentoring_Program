import * as express from 'express';
import usersBd from '../../bd';


const route = express.Router();

route.get('/create', (req, res) => {
  usersBd.add('12', { id: '12', login: 'Alex' });
  const user = usersBd.get('12');
  res.send(JSON.stringify(user));
});

export default route;

