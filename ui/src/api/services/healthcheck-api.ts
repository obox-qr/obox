import { AxiosResponse } from 'axios';
import Paths from '../paths';
import RestClient from '../rest-client';

export interface StatusInfoInterface {
  status: string;
  message?: string;
}

export interface DetailsInterface {
  ['nestjs-docs']?: StatusInfoInterface;
  database?: StatusInfoInterface;
}

export interface HealthCheckResponseInterface {
  status: string;
  info: DetailsInterface;
  error: DetailsInterface;
  details: DetailsInterface;
}

export interface HealthCheckApiInterface {
  healthCheck(): Promise<AxiosResponse<HealthCheckResponseInterface, unknown>>;
}

export default class HealthCheckApi {
  static healthCheck() {
    return RestClient.get(Paths.HEALTH);
  }
}
