import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from './base.entity';
import { DBCourier } from './courier.orm-entity';
import { DBCustomer } from './customer.orm-entity';

@Entity('deliveries')
export class DBDelivery extends BaseEntity {
  @Column({ type: 'varchar', length: 255 })
  address: string;

  @Column({ name: 'delivery_date', type: 'timestamp' })
  deliveryDate: Date;

  @ManyToOne(() => DBCourier, (courier) => courier.deliveries)
  courier: DBCourier;

  @ManyToOne(() => DBCustomer, (courier) => courier.deliveries)
  customer: DBCustomer;
}
