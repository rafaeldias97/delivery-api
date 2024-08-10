import { Inject, Injectable } from '@nestjs/common';
import { CustomerEntity } from 'src/domain/entities/customer.entity';
import { ICustomerRepository } from 'src/domain/interfaces/repository/customer-repository.interface';
import { UseCase } from 'src/domain/interfaces/use-case/use-case.interface';
import { CustomerRepository } from 'src/infrastructure/database/repository/customer.repository';
import { AuthService } from '../services/auth.service';

@Injectable()
export class CreateCustomerUseCase
  implements UseCase<CustomerEntity, CustomerEntity>
{
  constructor(
    @Inject(CustomerRepository)
    private readonly customerRepository: ICustomerRepository,
    private readonly authService: AuthService,
  ) {}

  async execute(input: CustomerEntity): Promise<CustomerEntity> {
    const createdCustomer = await this.customerRepository.create(input);
    await this.authService.signUp(
      createdCustomer.email,
      createdCustomer.password,
    );
    delete createdCustomer.password;
    return createdCustomer;
  }
}
