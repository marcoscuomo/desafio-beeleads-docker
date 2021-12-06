import { Router } from 'express';

import { ensureAuthenticate } from '@shared/infra/middlewares/ensureAuthenticate';
import { CreateCustomerController } from '@modules/customers/useCases/createCustomer/CreateCustomerController';
import { UpdateCustomerController } from '@modules/customers/useCases/updateCustomer/UpdateCustomerController';

const customerRouter = Router();

const createCustomerController = new CreateCustomerController();
const updateCustomerController = new UpdateCustomerController();

customerRouter.post('/', ensureAuthenticate, createCustomerController.handle);
customerRouter.put('/', ensureAuthenticate, updateCustomerController.handle);

export { customerRouter };
