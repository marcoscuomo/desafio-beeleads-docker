import { Router } from 'express';

import { ensureAuthenticate } from '@shared/infra/middlewares/ensureAuthenticate';
import { CreateCustomerController } from '@modules/customers/useCases/createCustomer/CreateCustomerController';

const customerRouter = Router();

const createCustomerController = new CreateCustomerController();

customerRouter.post('/', ensureAuthenticate, createCustomerController.handle);

export { customerRouter };
