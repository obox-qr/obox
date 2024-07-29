import AuthApi from './services/auth-api';
import HealthCheckApi from './services/healthcheck-api';

export enum ServicesNames {
  AUTH = 'auth',
  HEALTHCHECK = 'healthcheck',
}

const servicesMap = new Map<ServicesNames, unknown>([
  [ServicesNames.AUTH, AuthApi],
  [ServicesNames.HEALTHCHECK, HealthCheckApi],
]);

export default class ApiService {
  static getService<T>(serviceName: ServicesNames) {
    return servicesMap.get(serviceName) as T;
  }
}
