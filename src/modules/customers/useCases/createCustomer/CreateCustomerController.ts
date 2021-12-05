import { Request, Response } from 'express';

class CreateCustomerController {

  async handle( request: Request, response: Response ) {
    return response.json({msg: 'chegou'});
  }
}

export { CreateCustomerController }