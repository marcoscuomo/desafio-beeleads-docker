import { ICreateUserDTO } from "@modules/users/dtos/ICreateUserDTO";
import { Customer } from "@modules/customers/infra/typeorm/entities/Customer";

interface ICustomerRepository {
  create(data: ICreateCustomerDTO): Promise<Customer>;
  findById(id: string): Promise<Customer>;
  listCustomers(): Promise<Customer[]>;
  findByName(nome: string): Promise<Customer[]>;
  findByEmail(email: string): Promise<Customer>;
  updateCustomer(data: IUpdateCustomerDTO): Promise<void>;
  deleteCustomer(id: number): Promise<void>;
}

export { ICustomerRepository }