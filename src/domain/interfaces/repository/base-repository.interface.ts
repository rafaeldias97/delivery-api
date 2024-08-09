export interface IBaseRepository<T> {
  create(customer: T): Promise<T>;
  update(customer: T): Promise<T>;
  delete(id: string): Promise<T>;
  findById(id: string): Promise<T>;
}
