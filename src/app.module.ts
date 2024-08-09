import { Module } from '@nestjs/common';
import { TypeOrmConfig } from './config/typeorm';
import { CustomerController } from './infrastructure/controllers/customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { CreateCustomerUseCase } from './application/use-cases/create-customer.usecase';
import { CustomerRepository } from './infrastructure/database/repository/customer.repository';
import { DBCustomer } from './infrastructure/database/entities/customer.orm-entity';
import { DBCourier } from './infrastructure/database/entities/courier.orm-entity';
import { FindCustomerUseCase } from './application/use-cases/find-customer.usecase';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Torna as variáveis acessíveis globalmente em toda a aplicação
    }),
    TypeOrmModule.forFeature([DBCustomer, DBCourier]),
    TypeOrmModule.forRoot(TypeOrmConfig),
  ],
  controllers: [CustomerController],
  providers: [CustomerRepository, CreateCustomerUseCase, FindCustomerUseCase],
})
export class AppModule {}
