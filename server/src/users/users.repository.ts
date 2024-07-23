import { Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOptionsWhere, Repository } from 'typeorm';

import { CreateUserRequestDto } from '@/common/dto/auth/create-user.request.dto';
import { AppLogger } from '@/common/utils/logger/logger';

import { User } from './users.entity';

export class UsersRepository {
  constructor(
    @InjectRepository(User) private readonly repository: Repository<User>,
    @Inject(AppLogger) private readonly logger: AppLogger,
  ) {
    this.logger.log('Users Repository initialized', User.name);
  }

  async findOneByCriteria(
    criteria: FindOptionsWhere<User>,
  ): Promise<User | null> {
    return this.repository.findOneBy(criteria);
  }

  async createUser({ email, password }: CreateUserRequestDto): Promise<User> {
    const user = this.repository.create({ email, password });
    return await this.repository.save(user);
  }
}
