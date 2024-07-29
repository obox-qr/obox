import { AxiosResponse } from 'axios';
import RestClient from '../rest-client';
import Paths from '../paths';

export interface CreateUserProps {
  email: string;
  password: string;
}

export interface AuthApiInterface {
  createUser(data: CreateUserProps): Promise<AxiosResponse<unknown, unknown>>;
  fetchUser(): Promise<AxiosResponse<unknown, unknown>>;
}

export default class AuthApi {
  static createUser(data: CreateUserProps) {
    return RestClient.post(Paths.USER, data);
  }

  static fetchUser() {
    return RestClient.get(Paths.USER);
  }
}
