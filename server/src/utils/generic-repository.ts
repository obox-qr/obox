import { Repository, EntityTarget, ObjectLiteral, DeepPartial, UpdateResult } from 'typeorm';
import { getDataSource } from '../config/db';
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity';

interface IGenericRepository<T extends ObjectLiteral> {
  create(data: DeepPartial<T>): Promise<T>;
  getById(id: string): Promise<T | null>;
  delete(id: string): Promise<void>;
  findOneByCriteria(criteria: Partial<T>): Promise<T | null>;
}

export class GenericRepository<T extends ObjectLiteral> implements IGenericRepository<T> {
  private repository: Repository<T>;

  constructor(entity: EntityTarget<T>) {
    this.repository = getDataSource().getRepository(entity);
  }

  async create(data: DeepPartial<T>): Promise<T> {
    const newEntity = this.repository.create(data);
    return await this.repository.save(newEntity);
  }

  async update(id: string, data: QueryDeepPartialEntity<T>): Promise<UpdateResult> {
    return await this.repository.update(id, data);
  }

  async getById(id: string): Promise<T | null> {
    return await this.repository.findOne({
      where: { id } as any,
    });
  }

  async findOneByCriteria(criteria: Partial<T>): Promise<T | null> {
    return await this.repository.findOne({
      where: criteria
    });
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}
