import { CustomerEntity } from 'src/domain/entities/customer.entity';
import { ICustomerRepository } from 'src/domain/interfaces/repository/customer-repository.interface';
import { DBCustomer } from '../entities/customer.orm-entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CustomerRepository implements ICustomerRepository {
  constructor(
    @InjectRepository(DBCustomer)
    private readonly customerRepo: Repository<DBCustomer>,
  ) {}
  async create(customer: CustomerEntity): Promise<CustomerEntity> {
    try {
      const customerCreated = await this.customerRepo.save(customer);
      console.log(customerCreated);
      return customer;
    } catch (error) {
      throw new Error(error);
    }
  }
  update(customer: CustomerEntity): Promise<CustomerEntity> {
    console.log(customer);
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<CustomerEntity> {
    console.log(id);
    throw new Error('Method not implemented.');
  }
  async findById(id: string): Promise<CustomerEntity> {
    try {
      const customer = await this.customerRepo.findOneBy({ id });
      return customer;
    } catch (error) {
      throw new Error(error);
    }
  }
}
