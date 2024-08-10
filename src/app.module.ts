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
import { DBDelivery } from './infrastructure/database/entities/delivery.orm-entity';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './application/services/auth.service';
import { AuthController } from './infrastructure/controllers/auth.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Torna as variáveis acessíveis globalmente em toda a aplicação
    }),
    JwtModule.register({
      secret: process.env.JWT_SECRET, // Configura o segredo do JWT
      signOptions: { expiresIn: '1h' },
    }),
    TypeOrmModule.forFeature([DBCustomer, DBCourier, DBDelivery]),
    TypeOrmModule.forRoot(TypeOrmConfig),
  ],
  controllers: [AuthController, CustomerController],
  providers: [
    AuthService,
    CustomerRepository,
    CreateCustomerUseCase,
    FindCustomerUseCase,
  ],
})
export class AppModule {}
