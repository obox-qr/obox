import {
  Body,
  Controller,
  Get,
  Path,
  Post,
  Route,
  Tags,
} from "tsoa";
import { injectable } from 'tsyringe';

import { TenantService } from './Tenant.service';

import { Tenant } from './Tenant.model';

@Route('/tenants')
@Tags('Tenants')
@injectable()
export class TenantController extends Controller {
  constructor(private tenantService: TenantService) {
    super();
  }

  @Post('/')
  async createTenant(@Body() dto: { userId: string }): Promise<Tenant | undefined> {
    const { userId } = dto;
    return this.tenantService.createTenant(userId);
  }

  @Get("{id}")
  async getTenantById(@Path() id: string): Promise<Tenant | undefined> {
    return this.tenantService.getTenantById(id);
  }
}
