import { injectable, inject } from 'tsyringe';
import { TenantRepository } from './Tenant.repository';
import { Tenant } from './Tenant.model';
import { TenantNotFoundError } from '../../utils/error-builder';

@injectable()
export class TenantService {
  constructor(
    @inject(TenantRepository)
    private tenantRepository: TenantRepository
  ) { }

  async createTenant(userId: string): Promise<Tenant> {
    return await this.tenantRepository.create({ userId });
  }

  async getTenantById(id: string): Promise<Tenant> {
    const tenant = await this.tenantRepository.getById(id);
    
    if (!tenant) {
      throw TenantNotFoundError();
    }
    
    return tenant;
  }
}
