import RestClient from './rest-client';

export default class AuthApi {
  static createUser(url: string, data: { email: string; password: string }) {
    return RestClient.post(url, data);
  }

  static fetchUser(url: string) {
    return RestClient.get(url);
  }
}
