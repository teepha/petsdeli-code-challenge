export interface IRepository<T> {
  create(attrs: any): Promise<T>;
}
