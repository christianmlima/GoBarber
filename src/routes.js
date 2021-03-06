import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/session', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', authMiddleware, UserController.update);
// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'chris',
//     email: 'chris@chris',
//     password_hash: '321',
//   });

//   return res.json(user);
// });

export default routes;
