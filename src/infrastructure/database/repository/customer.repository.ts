import { ICustomerRepository } from 'src/domain/interfaces/repository/customer-repository.interface';
import { DBCustomer } from '../entities/customer.orm-entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseRepository } from './base.repository';

@Injectable()
export class CustomerRepository
  extends BaseRepository<DBCustomer>
  implements ICustomerRepository
{
  constructor(
    @InjectRepository(DBCustomer)
    private readonly customerRepo: Repository<DBCustomer>,
  ) {
    super(customerRepo);
  }
}
