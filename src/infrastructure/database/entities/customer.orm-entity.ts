import { CustomerEntity } from 'src/domain/entities/customer.entity';
import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { DBDelivery } from './delivery.orm-entity';

@Entity('customers')
export class DBCustomer extends BaseEntity implements CustomerEntity {
  @Column({ name: 'image' })
  image: string;
  @Column({ name: 'name' })
  name: string;
  @Column({ name: 'email' })
  email: string;
  @Column({ name: 'password' })
  password: string;

  @OneToMany(() => DBDelivery, (delivery) => delivery.customer)
  deliveries: DBDelivery[];
}
