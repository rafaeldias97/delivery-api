import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCustomerUseCase } from 'src/application/use-cases/create-customer.usecase';
import { FindCustomerUseCase } from 'src/application/use-cases/find-customer.usecase';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import {
  CustomerInputDto,
  CustomerOutputDto,
} from '../mappers/customer.mapper';

@ApiTags('customers')
@Controller('customers')
export class CustomerController {
  constructor(
    private readonly createCustomerUseCase: CreateCustomerUseCase,
    private readonly findCustomerUseCase: FindCustomerUseCase,
  ) {}

  @ApiOperation({ summary: 'Create a new customer' })
  @ApiResponse({
    status: 201,
    description: 'The customer has been successfully created.',
    type: CustomerOutputDto,
  })
  @Post()
  async createCustomer(
    @Body() customer: CustomerInputDto,
  ): Promise<CustomerOutputDto> {
    return await this.createCustomerUseCase.execute(customer);
  }

  @ApiOperation({ summary: 'Customer detail' })
  @ApiResponse({
    status: 201,
    type: CustomerOutputDto,
  })
  @Get(':id')
  async findCustomer(@Param('id') id: string): Promise<CustomerOutputDto> {
    return await this.findCustomerUseCase.execute(id);
  }
}
