import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'delivery',
  password: 'de123',
  database: 'delivery',
  entities: [__dirname + '/../**/*.orm-entity{.ts,.js}'],
  synchronize: true,
};
