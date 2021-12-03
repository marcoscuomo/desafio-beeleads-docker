import { Router } from 'express'

import { CreateUserController } from '@modules/users/useCases/createUser/CreateUserController';
import { AuthenticationUserController } from '@modules/users/useCases/authenticationUser/AuthenticationUserController';

const userRouter = Router();

const createUserController = new CreateUserController();
const authenticationUserControler = new AuthenticationUserController();

userRouter.post('/', createUserController.handle);
userRouter.post('/auth', authenticationUserControler.handle);

export { userRouter };