import AuthApi from './auth-api';
import HealthCheckApi from './healthcheck-api';

export default class ApiService {
  static getAuthApi = () => AuthApi;

  static getHealthCheckApi = () => HealthCheckApi;
}
