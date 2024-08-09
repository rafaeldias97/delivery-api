import { Inject, Injectable } from '@nestjs/common';
import { CustomerEntity } from 'src/domain/entities/customer.entity';
import { ICustomerRepository } from 'src/domain/interfaces/repository/customer-repository.interface';
import { UseCase } from 'src/domain/interfaces/use-case/use-case.interface';
import { CustomerRepository } from 'src/infrastructure/database/repository/customer.repository';

@Injectable()
export class FindCustomerUseCase implements UseCase<string, CustomerEntity> {
  constructor(
    @Inject(CustomerRepository)
    private readonly customerRepository: ICustomerRepository,
  ) {}

  async execute(id: string): Promise<CustomerEntity> {
    const createdCustomer = await this.customerRepository.findById(id);
    delete createdCustomer.password;
    return createdCustomer;
  }
}
