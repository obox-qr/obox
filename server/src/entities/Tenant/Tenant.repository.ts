import { Tenant } from './Tenant.model';
import { GenericRepository } from '../../utils/generic-repository';

export class TenantRepository extends GenericRepository<Tenant>{
  constructor() {
    super(Tenant);
  }
}
