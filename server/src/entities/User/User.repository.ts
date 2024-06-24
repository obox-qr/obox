import { User } from './User.model';

import { GenericRepository } from '../../utils/generic-repository';

export class UserRepository extends GenericRepository<User> {
  constructor() {
    super(User);
  }

  async findByEmail(email: string): Promise<User | null> {
    return this.findOneByCriteria({ email });
  }
}
