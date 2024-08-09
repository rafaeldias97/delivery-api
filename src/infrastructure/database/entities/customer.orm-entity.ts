import { CustomerEntity } from 'src/domain/entities/customer.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('customers')
export class DBCustomer implements CustomerEntity {
  @PrimaryGeneratedColumn('uuid', { name: 'id' })
  id?: string;
  @Column({ name: 'image' })
  image: string;
  @Column({ name: 'name' })
  name: string;
  @Column({ name: 'email' })
  email: string;
  @Column({ name: 'password' })
  password: string;
  @CreateDateColumn({ name: 'created_at' })
  createdAt?: Date;
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt?: Date;
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt?: Date;
}
