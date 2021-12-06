import { getRepository, Repository } from "typeorm";

import { ICustomerRepository } from "@modules/customers/repositories/ICustomerRepository";
import { Customer } from "../entities/Customer";

class CustomerRepository implements ICustomerRepository {

  private repository: Repository<Customer>;

  constructor() {
    this.repository = getRepository(Customer);
  }
  
  async create({ nome, email, dataNascimento, sexo, telefone }: ICreateCustomerDTO): Promise<Customer> {
    const customer = this.repository.create({
      nome,
      email,
      dataNascimento,
      sexo,
      telefone
    });

    this.repository.save(customer);

    return customer;
  }

  async findById(id: string): Promise<Customer> {
    return await this.repository.findOne({ id });
  }
  
  async listCustomers(): Promise<Customer[]> {
    return await this.repository.find();
  }
  
  async findByName(nome: string): Promise<Customer[]> {
    return await this.repository.find({ nome });
  }
  
  async findByEmail(email: string): Promise<Customer> {
    return await this.repository.findOne({ email });
  }
  
  async updateCustomer({ id, nome, email, dataNascimento, sexo, telefone }: IUpdateCustomerDTO): Promise<void> {
    await this.repository
    .createQueryBuilder()
    .update(Customer)
    .set({
      nome,
      email,
      dataNascimento,
      sexo,
      telefone
    })
    .where("id := id")
    .setParameters({id})
    .execute();
  }
  
  async deleteCustomer(id: number): Promise<void> {
    await this.repository
    .createQueryBuilder()
    .update(Customer)
    .set({
      deleted: true,
      active: false,
    })
    .where("id = :id")
    .setParameters({id})
    .execute();
  }

}

export { CustomerRepository }