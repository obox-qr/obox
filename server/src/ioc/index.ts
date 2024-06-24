import { IocContainer } from '@tsoa/runtime';
import { container, Lifecycle } from 'tsyringe';

import { TenantService } from '../entities/Tenant/Tenant.service';
import { TenantRepository } from '../entities/Tenant/Tenant.repository';

container.register('ITenantsService', { useClass: TenantService }, { lifecycle: Lifecycle.Singleton });
container.register('ITenantsRepository', { useClass: TenantRepository }, { lifecycle: Lifecycle.Singleton });

export const iocContainer: IocContainer = { get: <T>(controller: { prototype: T }): T => container.resolve<T>(controller as never) };

export { container };
export default iocContainer;
