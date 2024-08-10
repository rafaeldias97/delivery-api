import { Repository, DeepPartial } from 'typeorm';
import { BaseEntity } from '../entities/base.entity';
import { IBaseRepository } from 'src/domain/interfaces/repository/base-repository.interface';

export abstract class BaseRepository<T extends BaseEntity>
  implements IBaseRepository<T>
{
  constructor(private readonly entityRepo: Repository<T>) {}

  async create(entity: DeepPartial<T>): Promise<T> {
    try {
      const entityCreated = await this.entityRepo.save(entity);
      console.log(entityCreated);
      return entityCreated;
    } catch (error) {
      throw new Error(`Failed to create entity: ${error.message}`);
    }
  }

  update(entity: T): Promise<T> {
    console.log(entity);
    throw new Error('Method not implemented.');
  }

  delete(id: string): Promise<T> {
    console.log(id);
    throw new Error('Method not implemented.');
  }

  async findById(id: string): Promise<T | null> {
    try {
      const entity = await this.entityRepo.findOneBy({ id } as any);
      return entity;
    } catch (error) {
      throw new Error(`Failed to find entity by ID: ${error.message}`);
    }
  }
}
