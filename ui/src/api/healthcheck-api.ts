import Paths from './paths';
import RestClient from './rest-client';

export default class HealthCheckApi {
  static healthCheck() {
    return RestClient.get(Paths.HEALTH);
  }
}
