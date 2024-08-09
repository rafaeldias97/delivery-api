import { Inject, Injectable } from '@nestjs/common';
import { CustomerEntity } from 'src/domain/entities/customer.entity';
import { ICustomerRepository } from 'src/domain/interfaces/repository/customer-repository.interface';
import { UseCase } from 'src/domain/interfaces/use-case/use-case.interface';
import { CustomerRepository } from 'src/infrastructure/database/repository/customer.repository';

@Injectable()
export class CreateCustomerUseCase
  implements UseCase<CustomerEntity, CustomerEntity>
{
  constructor(
    @Inject(CustomerRepository)
    private readonly customerRepository: ICustomerRepository,
  ) {}

  async execute(input: CustomerEntity): Promise<CustomerEntity> {
    const createdCustomer = await this.customerRepository.create(input);
    delete createdCustomer.password;
    return createdCustomer;
  }
}
