import { CustomerEntity } from 'src/domain/entities/customer.entity';
import { IBaseRepository } from './base-repository.interface';

export interface ICustomerRepository extends IBaseRepository<CustomerEntity> {}
