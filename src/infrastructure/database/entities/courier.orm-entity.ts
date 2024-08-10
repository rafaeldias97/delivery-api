import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity('couriers')
export class DBCourier extends BaseEntity {
  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({
    name: 'contract_number',
    type: 'varchar',
    length: 100,
    unique: true,
  })
  contactNumber: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  email?: string;

  @Column({ type: 'text', nullable: true })
  address?: string;

  @Column({
    name: 'vehicle_details',
    type: 'varchar',
    length: 100,
    nullable: true,
  })
  vehicleDetails?: string;

  //   @OneToMany(() => Delivery, (delivery) => delivery.courier)
  //   deliveries: Delivery[];
}
