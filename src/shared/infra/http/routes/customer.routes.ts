import { Router } from 'express';

import { ensureAuthenticate } from '@shared/infra/middlewares/ensureAuthenticate';
import { CreateCustomerController } from '@modules/customers/useCases/createCustomer/CreateCustomerController';
import { UpdateCustomerController } from '@modules/customers/useCases/updateCustomer/UpdateCustomerController';
import { ListCustomerController } from '@modules/customers/useCases/listCustomers/ListCustomersController';

const customerRouter = Router();

const createCustomerController = new CreateCustomerController();
const updateCustomerController = new UpdateCustomerController();
const listCustomerController = new ListCustomerController();

customerRouter.post('/', ensureAuthenticate, createCustomerController.handle);
customerRouter.put('/', ensureAuthenticate, updateCustomerController.handle);
customerRouter.get('/', ensureAuthenticate, listCustomerController.handle);

export { customerRouter };
